const User = require("../models/user.model");
const authUtility = require('../utility/authentication');
const validation = require('../utility/validation');
function getSignupPage(req, res) {
    res.render("customer/auth/signup");
}

async function signup(req, res, next) {

    if (!validation.userDetailsAreValid(
        req.body.email,
        req.body.password,
        req.body.fullname,
        req.body.street,
        req.body.postcode,
        req.body.city
    ) || !validation.emailIsConfirmed(req.body.email, req.body.confirmemail))
    {
        res.redirect('/signup');
        return;
    }

    const user = await new User(
        req.body.email,
        req.body.password,
        req.body.fullname,
        req.body.street,
        req.body.postcode,
        req.body.city
    );

    try {
        const existsAlready = await user.existsAlready();
        if(existsAlready) {
            res.redirect('/signup');
            return;
        }
        await user.signup();
    } catch (error) {
        next(error);
        return;
    }
    res.redirect("/login");
}

function getLoginPage(req, res) {
    res.render("customer/auth/login");
}

async function login(req, res, next) {
    const user = new User(req.body.email, req.body.password);
    let existingUser;
    try {
        existingUser = await user.getUserWithSameEmail();
    } catch(error) {
        next(error);
        return;
    }

    if (!existingUser) {
        res.redirect('/login');
        return;
    }
    const passwordIsCorrect = await user.hasMatchingPassword(existingUser.password);

    if(!passwordIsCorrect) {
        res.redirect('/login');
        return;
    }
    authUtility.createUserSession(req, existingUser, function () {
        res.redirect('/');
    })
}

function logout(req, res) {
    authUtility.destroyUserAuthSession(req);
    res.redirect('/login');
}

module.exports = {
    getSignupPage: getSignupPage,
    getLoginPage: getLoginPage,
    signup: signup,
    login: login,
    logout: logout
}