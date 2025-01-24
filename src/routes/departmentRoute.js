import express from 'express'
import authenticateToken from '../middleware/authenticateToken.js';
import { createDepartment,updateDepartment,deleteDepartment,getAllDepartment } from '../controllers/departmentController.js';
 
const departmentRouter = express.Router();

departmentRouter.post("/create",authenticateToken,createDepartment);
departmentRouter.put("/update/:id",authenticateToken,updateDepartment);
departmentRouter.post("/delete/:id",authenticateToken,deleteDepartment);
departmentRouter.get("/departmentList",authenticateToken,getAllDepartment);

export default departmentRouter
