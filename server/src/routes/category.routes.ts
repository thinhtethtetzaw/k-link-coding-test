import { Router } from "express";
import categoryController from "../controllers/category.controller";

const categoryRouter = Router();

categoryRouter.post("/", categoryController.categoryCreator);
categoryRouter.get("/", categoryController.categoriesFetcher);

export default categoryRouter;
