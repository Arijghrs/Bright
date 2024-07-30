import express from 'express';
import { addAssistance, addManager, addProfessor, createOwner } from '../controllers/owner.controller.js';
import { checkOwnerRole, verifyToken } from '../utils/verifyUser.js';



const router = express.Router();

router.post("/addmanager", addManager, checkOwnerRole, verifyToken);
router.post("/addAssistance", addAssistance, checkOwnerRole, verifyToken);
router.post("/addProfessor", addProfessor, checkOwnerRole, verifyToken);
router.post("/createOwner", createOwner);


export default router;