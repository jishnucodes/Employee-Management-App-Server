import express from 'express'
import authenticateToken from '../middleware/authenticateToken.js';
import { getAllRoles } from '../controllers/roleController.js';

const roleRouter = express.Router();


roleRouter.get("/getAllRoles", authenticateToken, getAllRoles)

export default roleRouter;