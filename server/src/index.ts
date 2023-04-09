import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { cyanBright } from "cli-color";
import { protectedRoutes, guestRoutes } from "./routes";
import sequelizeConnection from "./config";

import authMiddleware from "./middlewares/auth.middleware";
import seed from "./seed";

dotenv.config();

const get = () => {
  const app = express();

  const corsOptions = {
    origin: `*`,
  };

  app.use(cors(corsOptions));

  // Body parsing Middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get("/", async (req: Request, res: Response) => {
    res.status(200).send({
      message: `Welcome to the Backend API! Endpoints available at http://localhost:${process.env.NODE_LOCAL_PORT}/api/v1`,
    });
  });

  app.use("/api/v1", guestRoutes);
  app.use("/api/v1", authMiddleware, protectedRoutes);

  sequelizeConnection
    .sync({ force: true })
    .then(async () => {
      console.log(cyanBright("Database successfully connected!"));
      await seed();
    })
    .catch((err) => {
      console.log("Error", err);
    });

  return app;
};

export const start = () => {
  process.on("uncaughtException", function (err) {
    console.log(err);
  });
  const app = get();

  try {
    app.listen(process.env.NODE_LOCAL_PORT, () => {
      console.log(
        cyanBright(
          `⚡️[server]: Server is running at http://localhost:${process.env.NODE_LOCAL_PORT}`
        )
      );
    });
  } catch (error: any) {
    console.log(`Error occurred: ${error.message}`);
  }

  return app;
};

export default start();
