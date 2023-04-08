import { DataTypes } from "sequelize";
import db from "../config";

export interface UserAttributes {
  id: string;
  email: string;
  password: string;
}

const User = db.define("users", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
    validate: {
      notEmpty: true,
    },
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
    validate: {
      notEmpty: true,
    },
  },
});

export default User;
