import { DataTypes } from "sequelize";
import { sequelize } from "./sequelize.js";

export const UserModel = sequelize.define("User", {
  name: DataTypes.STRING,
  email: DataTypes.STRING
});