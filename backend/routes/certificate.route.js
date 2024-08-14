import express from 'express';
import { addCertificate, getCertificates } from '../controllers/certificate.controller.js';




const router = express.Router();


router.post("/addCertificate", addCertificate);
router.get("/getCertificates", getCertificates);



export default router;