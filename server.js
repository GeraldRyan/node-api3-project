const express = require('express');
const postDB = require("./posts/postDb")
const usersDB = require("./users/userDb")
const server = express();



server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {

  `[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get(
    'Origin'
  )}`
  next();
}

module.exports = server;
