import express from "express";
const router = express.Router();
import BookController from "../controllers/bookController.js";

// Public Routes
router.post("/register", BookController.BookRegistration);

// Protected Routes
// router.post("/changepassword", UserController.changeUserPassword);
// router.get("/loggeduser", UserController.loggedUser);

export default router;
