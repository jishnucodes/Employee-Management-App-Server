import express from 'express'
import { deleteUser, getUserById, signin, signup, userInsertion, userList, userUpdate } from '../controllers/userController.js';
import { checkAndCreateDefaultRoles } from '../middleware/defaultRole.js';
import authenticateToken from '../middleware/authenticateToken.js';

const userRouter = express.Router();


userRouter.post("/signin", signin);
userRouter.post("/signup", checkAndCreateDefaultRoles, signup);
userRouter.get("/userList", authenticateToken, userList)   
userRouter.get("/:id",authenticateToken, getUserById)
userRouter.put("/updateUser/:id", authenticateToken, userUpdate)
userRouter.post("/insertUser", authenticateToken, userInsertion);
userRouter.delete("/deleteUser/:id", authenticateToken, deleteUser);

export default userRouter;