import express from 'express';
import { registerUser } from '../controllers/userController.js';
import { notAllowed } from '../utils/notAlllowed.js';

const router = express.Router();

router.route('/users')
.post(registerUser)
.all(notAllowed)

export default router;