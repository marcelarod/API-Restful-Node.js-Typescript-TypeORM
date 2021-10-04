import { Router } from 'express';
import ProductsRouter from '@modules/products/routes/products.routes';
import usersRouter from '@modules/users/routes/users.routes';

const routes = Router();

routes.use('/products', ProductsRouter);
routes.use('/user', usersRouter);

export default routes;
