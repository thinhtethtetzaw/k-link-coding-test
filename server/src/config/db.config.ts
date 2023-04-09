import dotenv from "dotenv";
import { Dialect } from "sequelize";

dotenv.config();

export default {
  MYSQL_URL: process.env.MYSQL_URL as string,
  MYSQLPORT: process.env.MYSQLPORT as string,
  MYSQLHOST: process.env.MYSQLHOST as string,
  MYSQLUSER: process.env.MYSQLUSER as string,
  MYSQLPASSWORD: process.env.MYSQLPASSWORD as string,
  MYSQLDATABASE: process.env.MYSQLDATABASE as string,
  dialect: "mysql" as Dialect,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
