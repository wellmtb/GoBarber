import { Router } from 'express';
const routes = new Router();

import User from './app/models/User';

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Wellington Serafim',
    email: 'wellmtb@hotmail.com',
    password_hash: '12344567',
  });
  return res.json(user);
});

export default routes;
