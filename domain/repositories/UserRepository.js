import { User } from "../models/User.js";
import { UserModel } from "../../infrastructure/db/UserModel.js";

export class UserRepository {
  async findById(id) {
    const user = await UserModel.findByPk(id);
    return user ? new User(user) : null;
  }

  async create({ name, email }) {
    const user = await UserModel.create({ name, email });
    return new User(user);
  }

  async list() {
    const users = await UserModel.findAll();
    return users;
  }

  async deleteById(id) {
    const users = await UserModel.destroy({ where: { id } });
    return users;
  }
}