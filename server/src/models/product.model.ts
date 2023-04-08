import { DataTypes } from "sequelize";
import db from "../config";

export interface ProductAttributes {
  id: string;
  name: string;
  price: number;
  image: string;
}

const Product = db.define("products", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  price: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  image: {
    allowNull: true,
    type: DataTypes.STRING,
  },
});

export default Product;
