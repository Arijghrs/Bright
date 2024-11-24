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
    
    const { search = '' } = req.query;

   
    const query = {};
    if (search) {
      const searchRegex = new RegExp(search, 'i'); 
      query.$or = [
        { title: searchRegex },
        { Mentor: searchRegex }
        
      ];
    }

    
    const certificates = await Certificate.find(query);

    
    res.status(200).json(certificates);
  } catch (error) {
    next(error);
  }
};

