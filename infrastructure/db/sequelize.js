import dotenv from "dotenv";
dotenv.config()
import { Sequelize } from "sequelize";

console.log("ENV:", {
  DB_NAME: process.env.DB_NAME,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_HOST: process.env.DB_HOST
});

export const sequelize = new Sequelize(
  process.env.DB_NAME ,
  process.env.DB_USERNAME ,
  process.env.DB_PASSWORD ,
  {
    host: process.env.DB_HOST ,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    logging: false
  }
);