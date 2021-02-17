const express = require('express');
const logger = require("./middleware/middleware")
const postsRouter = require("./posts/posts-router")
const usersRouter = require("./users/users-router")

const server = express();

// remember express by default cannot parse JSON in request bodies

// global middlewares and routes need to be connected here

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

server.use(express.json())
server.use(logger())
server.use((err, req, res, next) => {

  console.log(err)
  res.status(500).json({
    message: "Oh no! Something went horribly wrong! Run for your life! It's going to blow!!"
  })
})

module.exports = server;