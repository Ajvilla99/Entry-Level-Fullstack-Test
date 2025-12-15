import db from '../models/index.js';

const { User } = db;

export const getUser = async () => {
  try {
    const users = await User.findOne({ where: { id }});
    return users;
  } catch (error) {
    console.error('Error fetching users from database:', error);
    throw error;
  }
};

export const UserService = {
  async getUserById(id) {
    return await User.findByPk(id);
  },

  async getUserByEmail(email) {
    return await User.findOne({ where: { email } })
  },

  async createUser(data) {
    return await User.create(data);
  },

  async updateUser(id, data) {
    const user = await User.findByPk(id)

    if (!user) return null;

    await user.update(data);
    return user
  }
}
