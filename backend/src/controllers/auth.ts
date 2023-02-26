import { User } from '../models/User';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
require('dotenv').config();

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

        let isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return response.status(400).json({ message: 'Invalid password' });
        }

        let token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
            expiresIn: 86400 // expires in 24 hours
        });

        return response.json({ auth: true, token });
    },
    register: async (request: Request, response: Response) => {

        console.log(request.body);

        const { name, email, password, phone } = request.body;
        
        const user = await User.findOne({ where: { email } });

        if (user) {
            return response.status(400).json({ message: 'User already exists' });
        }

        let hashedPassword = await bcrypt.hash(password, 10);

        console.log('hashed pass', hashedPassword);

        const newUser = await User.create({
            name: name,
            email: email,
            password: hashedPassword,
            phone: phone,
        });

        if (!newUser) {
            return response.status(400).json({ message: 'Error creating user' });
        }

        let token = jwt.sign({ email: newUser.email }, process.env.JWT_SECRET, {
            expiresIn: 86400 // expires in 24 hours
        });
        
        return response.json({ auth: true, token });
    }
}
