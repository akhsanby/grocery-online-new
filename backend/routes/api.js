import express from "express";
import { authMiddleware } from "../middleware/auth-middleware.js";
import userController from "../controllers/user-controller.js";

const userRouter = new express.Router();
userRouter.use(authMiddleware);

userRouter.get("/api/user", userController.get);

export { userRouter };
