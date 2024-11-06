import express from 'express'
import { getUserById, signin, signup } from '../controllers/userController.js';
import { checkAndCreateDefaultRoles } from '../middleware/defaultRole.js';

const userRouter = express.Router();


userRouter.post("/signin", signin);
userRouter.post("/signup", checkAndCreateDefaultRoles, signup);
userRouter.get("/:id", getUserById)

export default userRouter;