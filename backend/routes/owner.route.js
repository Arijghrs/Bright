import express from 'express';
import { addManager } from '../controllers/owner.controller.js';
import { checkOwnerRole, verifyToken } from '../utils/verifyUser.js';



const router = express.Router();

router.post("/addmanager", addManager, checkOwnerRole, verifyToken);


export default router;