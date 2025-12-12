import express from 'express';
import * as usersService from '../services/users.service.js';
import { UserService } from '../services/users.service.js';
import * as bcrypt from 'bcrypt'

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const users = await usersService.getUsers();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// Create User
router.post('/', async (req, res) => {
  try {
    const { password, ...data } = req.body;
    const newUser = await UserService.createUser({
      ...data,
      password: bcrypt.hashSync(password, 10)
    })
    res.status(201).json({
      msg: "User created sucessfully",
      newUser
    })
    res.status().json(newUser)
  } catch (error) {
    console.error(error);
    res.status(400).json({
      msg: "User not created corrected",
      error: error
    })
  }
})

// Update User
router.post('/:id', async (req, res) => {
  try {
    const { body: data, params: { id } } = req;

    const updatedUser = await UserService.updateUser(id, data);

    if (!updatedUser)
      res.json('User not found')

    res.status(204).json(updatedUser)
  } catch (error) {
    console.error('Error: ', error);
    res.status(400).json({
      msg: "",
      error: error,
    })
  }
})

export default router;
