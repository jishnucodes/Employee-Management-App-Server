import express from 'express'
 
const departmentRouter = express.Router();

departmentRouter.post("/create",authenticateToken,createDepartment);
departmentRouter.post("/update/:id",authenticateToken,updateDepartment);
departmentRouter.post("/delete/:id",authenticateToken,deleteDepartment);

export default departmentRouter
