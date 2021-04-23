const express = require("express");
const postRouter = express.Router();
const postController = require("../controllers/postController");
const userController = require("../controllers/userController");

postRouter.get("/",userController.protect , postController.getAllPosts);
postRouter.get("/inc-friend",userController.protect , postController.getAllPostsIncludeFriend);
postRouter.post("/",userController.protect , postController.createPost);
postRouter.delete("/:id",userController.protect , postController.deletePost);

module.exports = postRouter;