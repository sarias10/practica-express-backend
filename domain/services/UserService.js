export class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async getUserById(id) {
    return await this.userRepository.findById(id);
  }

  async registerUser({ name, email }) {
    return await this.userRepository.create({ name, email });
  }

  async listUsers() {
    return await this.userRepository.list();
  }

  async deleteUser(id) {
    const deleted = await this.userRepository.deleteById(id);
    if (!deleted) throw new Error("User not found");
    return true;
  }
}