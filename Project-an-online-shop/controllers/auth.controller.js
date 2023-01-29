const User = require("../models/user.model")
function getSignupPage(req, res) {
    res.render("customer/auth/signup");
}

async function signup(req, res) {
    const user = await new User(
        req.body['customer-email'],
        req.body['customer-password'],
        req.body['customer-fullname'],
        req.body['customer-street'],
        req.body['customer-postcode'],
        req.body['customer-city']
    );
    await user.signup();
    res.redirect("/login");
}

function getLoginPage(req, res) {
    res.render("customer/auth/login");
}

module.exports = {
    getSignupPage: getSignupPage,
    getLoginPage: getLoginPage,
    signup: signup,
}