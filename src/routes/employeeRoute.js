import express from 'express'
 
const employeeRouter = express.Router();

employeeRouter.post("/create",createEmloyee);
employeeRouter.post("/update/:id",updateEmloyee);
employeeRouter.post("/delete/:id",deleteEmloyee);

export default employeeRouter
