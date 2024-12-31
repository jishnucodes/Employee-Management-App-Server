import express from 'express';
import userRouter from './userRoute.js';
import roleRouter from './roleRouter.js';


const router = express.Router();

router.use('/user', userRouter);
router.use('/role', roleRouter);

export default router;