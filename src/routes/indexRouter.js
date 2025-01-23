import express from 'express';
import userRouter from './userRoute.js';
import employeeRouter from './employeeRoute.js';
import departmentRouter from './departmentRoute.js';


const router = express.Router();

router.use('/user', userRouter);
router.use('/employee',employeeRouter);
router.use('/department',departmentRouter);

export default router;