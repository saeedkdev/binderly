import { Router } from 'express';
import { authController } from './controllers/auth';

const routes = Router();

routes.get('/', (request, response) => {
    return response.json({ message: 'Hello World' });
});

routes.post('/login', authController.login);
routes.post('/register', authController.register);

export default routes;
