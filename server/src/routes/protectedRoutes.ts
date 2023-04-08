import express, { Request, Response } from "express";
import dotenv from "dotenv";
import productRouter from "./product.routes";
import categoryRouter from "./category.routes";

dotenv.config();
const routes: express.Router = express.Router();

routes.get("/", (req: Request, res: Response) => {
  res.send("There will be a list of all the available protected routes here!");
});

routes.use("/products", productRouter);
routes.use("/categories", categoryRouter);

export default routes;
