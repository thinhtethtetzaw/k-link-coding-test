import express, { Request, Response } from "express";
import dotenv from "dotenv";
import authRouter from "./auth.routes";

dotenv.config();
const routes: express.Router = express.Router();

routes.get("/", (req: Request, res: Response) => {
  res.send("There will be a list of all the available guest routes here!");
});

routes.use("/auth", authRouter);

export default routes;
