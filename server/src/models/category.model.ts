import { DataTypes } from "sequelize";
import db from "../config";

export interface CategoryAttributes {
  id: string;
  name: string;
}

const Category = db.define("categories", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
});

export default Category;
