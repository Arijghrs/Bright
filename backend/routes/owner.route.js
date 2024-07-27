import express from 'express';
import { addManager, createOwner } from '../controllers/owner.controller.js';
import { checkOwnerRole, verifyToken } from '../utils/verifyUser.js';



const router = express.Router();

router.post("/addmanager", addManager, checkOwnerRole, verifyToken);
router.post("/createOwner", createOwner);


export default router;