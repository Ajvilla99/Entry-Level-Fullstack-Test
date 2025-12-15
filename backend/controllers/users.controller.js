import express from 'express';
import { UserService } from '../services/users.service.js';
import * as bcrypt from 'bcrypt'

const router = express.Router();

// Get User
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params

    const user = await UserService.getUserById(id)
    
    return res.status(200).json(user)
  } catch (error) {
    
    res.status(400).json({
      message: 'Usuario no encontrado',
      error
    })
  }
})

// Create User
router.post('/', async (req, res) => {
  try {
    const { password, email, ...data } = req.body;

    const existUser = await UserService.getUserByEmail(email);
    if (existUser)
        res.json(200).json({ message: 'User already exist'})


    const newUser = await UserService.createUser({
      ...data,
      password: bcrypt.hashSync(password, 10)
    })

    const { password: passNewUser, ...rest } = newUser

    res.status(201).json({
      msg: "User created sucessfully",
      user: rest
    })
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
      res.status(400).json('User not found')

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
