import Model from "./models";
import bcrypt from "bcrypt";

const User = Model.User;
const Product = Model.Product;
const Category = Model.Category;

export default async () => {
  let salt = bcrypt.genSaltSync();
  let hashed_password = bcrypt.hashSync("password", salt);

  // user
  await User.create({
    email: "admin@gmail.com",
    password: hashed_password,
  });

  // products
  const categoriesCreator = async (createdProduct: any, categories: any) => {
    for (let category of categories) {
      const categoryRow = await Category.findOne({
        where: { name: category.toLowerCase() },
      });

      if (!!categoryRow) {
        createdProduct.addCategory(categoryRow, {
          through: { selfGranted: false },
        });
      } else {
        const newCategory = await Category.create({
          name: category.toLowerCase(),
        });
        createdProduct.addCategory(newCategory, {
          through: { selfGranted: false },
        });
      }
    }
  };

  await Product.create({
    name: "Shoe 1",
    price: 11000,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  }).then(async (createdProduct: any) => {
    categoriesCreator(createdProduct, ["Sneakers", "Shoes"]);
  });

  await Product.create({
    name: "Shoe 2",
    price: 12000,
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  }).then(async (createdProduct: any) => {
    categoriesCreator(createdProduct, ["Shoes", "Sports"]);
  });

  await Product.create({
    name: "Shoe 3",
    price: 13000,
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  }).then(async (createdProduct: any) => {
    categoriesCreator(createdProduct, ["Green", "Sports"]);
  });

  await Product.create({
    name: "Heal 1",
    price: 11000,
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  }).then(async (createdProduct: any) => {
    categoriesCreator(createdProduct, ["High heels", "Flower"]);
  });
};
