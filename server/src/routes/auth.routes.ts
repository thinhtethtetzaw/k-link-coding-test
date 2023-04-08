import { Router } from "express";
import authController from "../controllers/auth.controller";

const authRouter = Router();

authRouter.post("/login", authController.login);
authRouter.get("/login", authController.usersFetcher);
authRouter.post("/signup", authController.userCreator);

export default authRouter;
