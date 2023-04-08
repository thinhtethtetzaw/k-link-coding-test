import { Request, Response } from "express";
import bcrypt from "bcrypt";
import Model from "../models";
import jwt from "jsonwebtoken";
import { jwtSecret, jwtExpiration } from "../middlewares/auth.middleware";

const User = Model.User;

const userCreator = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  let salt = bcrypt.genSaltSync();
  let hashed_password = bcrypt.hashSync(password, salt);

  User.findOrCreate({
    where: { email: email },
    defaults: { email: email, password: hashed_password },
  })
    .then(([user, created]) => {
      if (created) {
        return res.status(201).json({
          meta: {
            status: 201,
            success: true,
            message: "User created successfully",
          },
          body: user,
        });
      } else {
        return res.status(409).json({
          meta: {
            status: 409,
            success: false,
            message: "User already exists",
          },
        });
      }
    })
    .catch((err: Error) => {
      return res.status(500).json({
        meta: {
          status: 500,
          success: false,
          message: err,
        },
      });
    });
};

const usersFetcher = async (req: Request, res: Response) => {
  User.findAll()
    .then((users) => {
      if (users.length > 0) {
        return res.status(200).json({
          meta: {
            status: 200,
            success: true,
            message: "users fetched successfully",
          },
          body: users,
        });
      } else {
        return res.status(404).json({
          meta: {
            status: 404,
            success: true,
            message: "No users found",
          },
          body: users,
        });
      }
    })
    .catch((err: Error) => {
      return res.status(500).json({
        meta: {
          status: 500,
          success: false,
          message: err,
        },
      });
    });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "no email or password" });
  }

  try {
    const user: any = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid email" });
    }

    var passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!",
      });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, jwtSecret, {
      expiresIn: jwtExpiration,
    });

    return res.status(200).send({ message: "Query is success", token });
  } catch (error) {
    return res.status(500).send({ message: "Query is fail", error });
  }
};

export default { login, userCreator, usersFetcher };
