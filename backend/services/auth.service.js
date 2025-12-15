import jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt'
import { UserService } from './users.service.js';


export const AuthService = {
  generateToken() {
    const payload = {
      userId: -1
    };

    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error('JWT_SECRET environment variable is not defined');
    }

    // Sign token with expiration (e.g., 1 hour)
    const token = jwt.sign(payload, secret, { expiresIn: '1h' });

    return token;
  },

  async login(data) {
    
    try {
      const user = await UserService.getUserByEmail(data.email)
      
      if (!user) 'invalid credentials';

      const isValidPassword = bcrypt.compare(data.password, user.password);
      if (!isValidPassword) 'invalid credentials';

      const { password, id, active, ...restData } = user;

      return {
        msg: 'Login Sucesfull',
        token: this.generateToken(),
        user: {
          id,
          firstname: user.firstname,
          lastname: user.lastname,
        }
      }
    } catch (error) {
      console.error(error)
    }
  }
}
