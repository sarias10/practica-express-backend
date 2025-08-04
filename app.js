import express from "express";
import { sequelize } from "./infrastructure/db/sequelize.js";
import { UserRepository } from "./domain/repositories/UserRepository.js";
import { UserService } from "./domain/services/UserService.js";
import { UserController } from "./infrastructure/web/UserController.js";
import routes from "./infrastructure/web/routes.js";



export const createApp = async () => {
  await sequelize.sync({ alter: true }); // crea/actualiza tablas automáticamente

  const userRepo = new UserRepository(); // capa que conecta con la base de datos
  const userService = new UserService(userRepo); // lógica de negocio
  const userController = new UserController(userService); // solicitud http

  const app = express();
  app.use(express.json());
  app.use(routes.userRoutes(userController));

  return app;
};