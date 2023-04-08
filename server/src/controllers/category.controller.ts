import { Request, Response } from "express";

import Model from "../models";
const Category = Model.Category;

const categoriesFetcher = async (req: Request, res: Response) => {
  Category.findAll()
    .then((categories) => {
      if (categories.length > 0) {
        return res.status(200).json({
          meta: {
            status: 200,
            success: true,
            message: "Categories fetched successfully",
          },
          body: categories,
        });
      } else {
        return res.status(404).json({
          meta: {
            status: 404,
            success: true,
            message: "No categories found",
          },
          body: categories,
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

const categoryCreator = async (req: Request, res: Response) => {
  const { name } = req.body;

  Category.findOrCreate({
    where: { name: name.toLowerCase() },
    defaults: { name: name.toLowerCase() },
  })
    .then(([category, created]) => {
      if (created) {
        return res.status(201).json({
          meta: {
            status: 201,
            success: true,
            message: "Category created successfully",
          },
          body: category,
        });
      } else {
        return res.status(409).json({
          meta: {
            status: 409,
            success: false,
            message: "Category already exists",
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

export default {
  categoryCreator,
  categoriesFetcher,
};
