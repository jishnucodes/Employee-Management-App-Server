import express from 'express'
import { getUserById, signin, signup, userInsertion } from '../controllers/userController.js';
import { checkAndCreateDefaultRoles } from '../middleware/defaultRole.js';
import authenticateToken from '../middleware/authenticateToken.js';

const userRouter = express.Router();


userRouter.post("/signin", signin);
userRouter.post("/signup", checkAndCreateDefaultRoles, signup);
userRouter.get("/:id", getUserById)
userRouter.post("/insertUser", authenticateToken, userInsertion)

export default userRouter;