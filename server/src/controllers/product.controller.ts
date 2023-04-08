import { Request, Response } from "express";
import { Op } from "sequelize";

import Model from "../models";
const Product = Model.Product;
const Category = Model.Category;

const productCreator = async (req: Request, res: Response) => {
  if (req.body && req.body.name && req.body.price && req.body.categories) {
    const { name, price, image, categories } = req.body;

    await Product.create({
      name: name,
      price: price,
      image: image,
    })
      .then(async (createdProduct: any) => {
        for (let category of categories) {
          const categoryRow = await Category.findOne({
            where: { name: category.toLowerCase() },
          });

          if (categoryRow) {
            createdProduct
              .addCategory(categoryRow, { through: { selfGranted: false } })
              .catch((err: Error) => {
                return res.status(500).json({
                  meta: {
                    status: 500,
                    success: false,
                    message: err,
                  },
                });
              });
          } else {
            const newCategory = await Category.create({
              name: category.toLowerCase(),
            });
            createdProduct
              .addCategory(newCategory, { through: { selfGranted: false } })
              .catch((err: Error) => {
                return res.status(500).json({
                  meta: {
                    status: 500,
                    success: false,
                    message: err,
                  },
                });
              });
          }
        }

        res.status(201).json({
          meta: {
            status: 201,
            success: true,
            message: "Product created successfully",
          },
          body: {
            name: createdProduct.name,
            price: createdProduct.price,
            image: createdProduct.image,
            categories: categories,
          },
        });
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
  } else {
    return res.status(402).json({
      meta: {
        status: 402,
        success: false,
        message: "Something is required",
      },
    });
  }
};

const productsFetcher = async (req: Request, res: Response) => {
  const { searchString, categoryId } = req.query;

  let include =
    categoryId !== undefined
      ? [
          {
            model: Category,
            where: { id: Number(categoryId) },
            as: "categories",
            attributes: ["id", "name"],
            through: {
              attributes: [],
            },
          },
        ]
      : [
          {
            model: Category,
            as: "categories",
            attributes: ["id", "name"],
            through: {
              attributes: [],
            },
          },
        ];

  Product.findAll({
    where: {
      name:
        searchString !== undefined
          ? { [Op.eq]: searchString }
          : { [Op.like]: "%" },
    },
    include: include,
  })
    .then((products) => {
      if (products.length > 0) {
        return res.status(200).json({
          meta: {
            status: 200,
            success: true,
            message: "Products fetched successfully",
          },
          body: products,
        });
      } else {
        return res.status(404).json({
          meta: {
            status: 404,
            success: true,
            message: "No products found",
          },
          body: products,
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

export default { productCreator, productsFetcher };
