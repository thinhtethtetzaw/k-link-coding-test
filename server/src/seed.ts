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
    name: "Nike Men's Tanjun Running Shoes Red Limited Offer",
    price: 150000,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  }).then(async (createdProduct: any) => {
    categoriesCreator(createdProduct, ["Red", "Sports"]);
  });

  await Product.create({
    name: "Nike Colorful Woman Sneakers Spring Collection",
    price: 120000,
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  }).then(async (createdProduct: any) => {
    categoriesCreator(createdProduct, ["Sneaker"]);
  });

  await Product.create({
    name: "Nike Green 3 Flyknit Men Wear Running Shoe",
    price: 130000,
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  }).then(async (createdProduct: any) => {
    categoriesCreator(createdProduct, ["Green", "Sports"]);
  });

  await Product.create({
    name: "LEBE High Heels Women Fashion Pointed Toe Sandals",
    price: 140000,
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  }).then(async (createdProduct: any) => {
    categoriesCreator(createdProduct, ["High heels", "Flower"]);
  });

  await Product.create({
    name: "Under Armour Men's Charged Assert 9 Running Shoe",
    price: 135000,
    image:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hvZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  }).then(async (createdProduct: any) => {
    categoriesCreator(createdProduct, ["Running Shoe"]);
  });

  await Product.create({
    name: "Bloch Dance Jason Smith Professional Leather Tap Shoe",
    price: 110000,
    image:
      "https://images.unsplash.com/photo-1626947346165-4c2288dadc2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNob2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  }).then(async (createdProduct: any) => {
    categoriesCreator(createdProduct, ["Leather Shoe"]);
  });

  await Product.create({
    name: "JMMY CHOO Badgley Mischka Women's Heel",
    price: 155000,
    image:
      "https://images.unsplash.com/photo-1581101767113-1677fc2beaa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
  }).then(async (createdProduct: any) => {
    categoriesCreator(createdProduct, ["High heels", "Party"]);
  });
};
