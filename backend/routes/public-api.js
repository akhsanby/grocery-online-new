import express from "express";
import userController from "../controllers/user-controller.js";

const publicRouter = new express.Router();
publicRouter.post("/api/user/register", userController.register);
publicRouter.post("/api/user/login", userController.login);

export { publicRouter };
