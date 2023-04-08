import Product from "./product.model";
import Category from "./category.model";
import db from "../config";

const Product_Category = db.define(
  "product_categories",
  {},
  { timestamps: false }
);

Product.belongsToMany(Category, {
  through: Product_Category,
  foreignKey: "product_id",
});

Category.belongsToMany(Product, {
  through: Product_Category,
  foreignKey: "category_id",
});

export default Product_Category;
