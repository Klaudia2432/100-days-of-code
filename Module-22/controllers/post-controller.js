const Post = require("../models/post");
const sessionValidation = require('../utility/validation-session');
const validation = require('../utility/validation');

function getHome (req, res) {
    res.render('welcome');
}

async function getAdmin (req, res) {
    if (!res.locals.isAuth) {
        return res.status(401).render('401');
    }

    const posts = Post.fetchAll();
    sessionErrorData = sessionValidation.getErrorSessionData(req, {
        title: '',
        content: ''
    });

    res.render('admin', {
        posts: posts,
        inputData: sessionErrorData
    });
}
async function createPosts (req, res) {
    const enteredTitle = req.body.title;
    const enteredContent = req.body.content;

    if (
        !validation.postIsValid(enteredTitle, enteredContent)
    ) {
        sessionValidation.flashErrorsToSession(req, {
            message: 'Invalid input - please check your data.',
            title: enteredTitle,
            content: enteredContent
        }, function () {
            res.redirect('/admin');
        })
        return; // or return res.redirect('/admin'); => Has the same effect
    }

    const post = new Post(enteredTitle, enteredContent);
    await post.save();

    res.redirect('/admin');
}

async function getSinglePost (req, res) {
    const postId = new ObjectId(req.params.id);
    const post = new Post(null, null, req.params.id);
    await post.fetch();

    if (!post.title || !post.content) {
        return res.render('404'); // 404.ejs is missing at this point - it will be added later!
    }

    sessionErrorData = sessionValidation.getErrorSessionData(req, {
        title: post.title,
        content: post.content
    });

    res.render('single-post', {
        post: post,
        inputData: sessionErrorData
    });
}

async function updatePost (req, res) {
    const enteredTitle = req.body.title;
    const enteredContent = req.body.content;

    if (
        !validation.postIsValid(enteredTitle, enteredContent)
    ) {
        sessionValidation.flashErrorsToSession(req, {
            message: 'Invalid input - please check your data!',
            title: enteredTitle,
            content: enteredContent
        }, function() {
            res.redirect(`/posts/${req.params.id}/edit`);
        });
        return;
    }

    const post = new Post(enteredTitle, enteredContent, req.params.id);
    await post.save();

    res.redirect('/admin');
}

async function deletePost (req, res) {
    const post = new Post(null, null, req.params.id);
    await post.delete();

    res.redirect('/admin');
}

module.exports = {
    getHome: getHome,
    getAdmin: getAdmin,
    createPosts: createPosts,
    getSinglePost: getSinglePost,
    updatePost: updatePost,
    deletePost: deletePost
};