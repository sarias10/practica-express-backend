import { Router } from "express";

const userRoutes = (userController) => {
  const router = Router();
  router.post("/users", userController.register);
  router.get("/users", userController.list);
  router.get("/users/:id", userController.getUserById)
  router.delete("/users/:id", userController.deleteUser);
  return router;
};

export default {
  userRoutes
}