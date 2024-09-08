import express from 'express';

import userController from '../controllers/UserController.js';
import UserExists from '../middlewares/UserExists.js';


const router = new express.Router();

router.post('/register', UserExists, userController.create);
router.get('/home', userController.login);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);


export default router;