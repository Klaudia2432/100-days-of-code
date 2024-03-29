// const userName = 'Klaudia';
//
// console.log(userName);
const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();

app.use(express.urlencoded({extended: false}));

app.get("/currenttime", function (req, res, next) {
    res.send('<h1>' + new Date().toISOString() + '</h1>');
});

app.get("/", function (req, res) {
    res.send('<form action="/store-user" method="POST"><label>Your Name: </label><input type="text" name="username"><button>Submit</button></form>');
});

app.post('/store-user', function (req, res) {
    const username = req.body.username;

    const filePath = path.join(__dirname, 'data', 'users.json');
    const fileData = fs.readFileSync(filePath);
    const existingUsers = JSON.parse(fileData);
    existingUsers.push(username);

    fs.writeFileSync(filePath, JSON.stringify(existingUsers));
    res.send('<h1>Username stored!</h1>');
});

app.get('/users', function (req, res){
    const filePath = path.join(__dirname, 'data', 'users.json');
    const fileData = fs.readFileSync(filePath);
    const existingUsers = JSON.parse(fileData);
    let responseDataf = '<ul>';

    for (const user of existingUsers) {
        responseDataf += '<li>' + user + '</li>';
    }

    responseDataf += '</ul>';

    res.send(responseDataf);
    // res.send(existingUsers);
});

app.listen(3000);