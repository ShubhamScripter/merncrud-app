import express from 'express';
const router=express.Router();
import { signup } from '../cantrollers/authCantrollers.js';

router.post('/signup',signup);

export default router;