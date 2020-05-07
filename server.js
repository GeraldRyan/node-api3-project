const Router = require('express').Router();
const postDB = require("./posts/postDb")
const usersDB = require("./users/userDb")
const express = require("express")
const server = express();

server.use(express.json()); // built in middleware, no need to use npm install
server.use(function (req, res, next){
  const today = new Date().toISOString(); // YY-MM-DD
  console.log(`[${today}] ${req.method} to ${req.url}`)
  next()
})

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
server.listen(6000)

module.exports = server;
