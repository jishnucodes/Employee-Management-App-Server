import express from 'express';
import userRouter from './userRoute.js';
import roleRouter from './roleRouter.js';
import employeeRouter from './employeeRoute.js';
import departmentRouter from './departmentRoute.js';


const router = express.Router();

router.use('/user', userRouter);

export default router;