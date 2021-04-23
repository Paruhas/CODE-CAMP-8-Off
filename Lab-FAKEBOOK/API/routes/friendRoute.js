const express = require("express");
const friendRouter = express.Router();
const friendController = require("../controllers/friendController");
const userController = require("../controllers/userController");

friendRouter.get("/",userController.protect , friendController.getAllFriends);
friendRouter.get("/request-list",userController.protect , friendController.requestList);
friendRouter.post("/",userController.protect , friendController.requestFriend);
friendRouter.patch("/:id",userController.protect , friendController.updateFriendStatus);
friendRouter.delete("/:id",userController.protect , friendController.deleteFriend);

module.exports = friendRouter;