import express from "express";
import * as userController from "../controllers/userController.js";

const router = express.Router();

router
  .route("/user")
  .get(userController.getUserList) // Get list of user
  .post(userController.createUser); // Create a new user

router
  .route("/user/id/:id")
  .get(userController.getUserDetail) // Get user details by ID
  .delete(userController.deleteUser) // Delete user by ID
  .put(userController.updateUser); // Update user by ID

export default router;
