const users = require("../users/users-model")
const { findUserPosts } = require("../../../node-api3-guided/users/users-model")

function logger(req, res, next) {
  // DO YOUR MAGIC
  const time = new Date().toISOString()
  `${req.method} ${req.url} ${time}`
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

    .catch((err) => {
      console.log(err)
      res.status(500).json({
        message: "There was an error retrieving this data"
      })
    })
  }
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
}

// do not forget to expose these functions to other modules
module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost
}