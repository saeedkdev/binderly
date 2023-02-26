import { User, initUser } from '../models/User';
import { Request, Response } from 'express';

// create an authentication controller to handle the login and register

export const authController = {
    login: async (request: Request, response: Response) => {
        const { email, password } = request.body;

        const user = await User.findOne({ where: { email } });

        if (!user) {
            return response.status(400).json({ message: 'User not found' });
        }

        if (!user.active) {
            return response.status(400).json({ message: 'User not active' });
        }

        if (user.password !== password) {
            return response.status(400).json({ message: 'Invalid password' });
        }
        
        // TODO jwt token

        return response.json(user);
    },
    register: async (request: Request, response: Response) => {

        const { name, email, password, phone } = request.body;
        
        const user = await User.findOne({ where: { email } });

        if (user) {
            return response.status(400).json({ message: 'User already exists' });
        }

        const newUser = await User.create({ name, email, password, phone });
        
        return response.json(newUser);
    }
}
