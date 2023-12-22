// pages/api/getFormData.js
import connectToDatabase from "../../lib/dbConnect";
import mongoose,{model, models} from "mongoose";

connectToDatabase();

const formDataSchema = new mongoose.Schema({
    Name: String,
    Designation: String,
    Quote: String,
    image:{
  
  
      filename: String,
      data: Buffer,
   
    }
  
    // Add more fields as needed
  });
  const FormDataModel = models.FormData || model("FormData", formDataSchema);

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { filename } = req.query;
    

      // Find the document in MongoDB based on the filename
      const formData = await FormDataModel.findOne({'image.filename': filename});
     

      if (!formData) {
        return res.status(404).json({ success: false, message: 'Form data not found' });
      }

      // Send the entire form data as a response
      res.setHeader('Content-Type', 'image/jpeg'); // Adjust based on your image type
      res.status(200).send(formData.image.data);
    } catch (error) {
      console.error('Error retrieving form data:', error.message);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
