const users = require("../users/users-model")
const posts = require("../posts/posts-model")
const { getUserPosts } = require("../users/users-model")

function logger(req, res, next) {
  // DO YOUR MAGIC
  const time = new Date().toISOString()
  console.log(`${req.method} ${req.url} ${time}`)

  next()
}

function validateUserId(req, res, next) {
  // DO YOUR MAGIC
  return (req, res, next) => {

    users.getById(req.params.id)

    .then((user) => {
        if (user) {
        req.user = user
        next()
      } else {
        res.status(404).json({
          message: "User not found"
        })

      }
    })

    .catch(err)
  }
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
  
}

function validatePost(validateUser, req, res, next) {
  // DO YOUR MAGIC
  posts.getById(req.params.id)

    .then((post) => {
        if (post) {
        req.post = post
        next()
      } else {
        res.status(404).json({
          message: "Post not found"
        })

      }
    })

    .catch(err)
  }

// do not forget to expose these functions to other modules
module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost
}