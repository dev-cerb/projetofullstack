import dotenv from 'dotenv';

dotenv.config({
  path: "../.env",
});

import './src/database';

import express from 'express';
import UserRoutes from './src/routes/UserRoutes.js';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/pages/user/', UserRoutes);
  }
}

export default new App().app;