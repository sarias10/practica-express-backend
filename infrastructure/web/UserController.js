export class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  getUserById = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await this.userService.getUserById(id);
      res.json(user);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  };

  register = async (req, res) => {
    const user = await this.userService.registerUser(req.body);
    res.status(201).json(user);
  };

  list = async (req, res) => {
    const user = await this.userService.listUsers(req.body);
    res.json(user);
  };

  deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      await this.userService.deleteUser(id);
      res.status(204).send();
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  };
}