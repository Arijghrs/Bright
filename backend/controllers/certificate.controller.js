import Certificate from "../models/Certificate.model.js";



export const addCertificate = async (req, res, next) => {
    try {
      const CertificateData = req.body;
      const certificate = new Certificate({ ...CertificateData });
  
      await certificate.save();
  
      return res.status(201).json(certificate);
    } catch (error) {
      next(error);
    }
  };

  export const getCertificates = async (req, res, next) => {
    try {
      const certificate = await Certificate.find(); 
      res.status(200).json(certificate);
    } catch (error) {
      next(error);
    }
  };
