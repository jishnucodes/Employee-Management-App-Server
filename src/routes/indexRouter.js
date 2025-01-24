import express from 'express';
import userRouter from './userRoute.js';
import roleRouter from './roleRouter.js';
import departmentRouter from './departmentRoute.js';


const router = express.Router();

router.use('/user', userRouter);
router.use('/role', roleRouter);
router.use('/department',departmentRouter)

export default router;