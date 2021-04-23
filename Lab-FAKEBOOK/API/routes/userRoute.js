const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");

userRouter.get("/users/me",userController.protect, userController.getMe);
userRouter.post("/login",userController.login);
userRouter.post("/register",userController.register);
userRouter.put("/users",userController.protect, userController.updateUser);

module.exports = userRouter;