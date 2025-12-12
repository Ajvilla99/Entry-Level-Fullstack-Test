import express from 'express';
import { AuthService } from '../services/auth.service.js';

const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const data = req.body
    const response = await AuthService.login(data);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: 'Invalid Credentials' });
  }
});

export default router;
