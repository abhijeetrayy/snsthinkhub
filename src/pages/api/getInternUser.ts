import connectToDatabase from "../../lib/dbConnect";

import mongoose, { model, models } from "mongoose";

async function submitForm(req, res) {
    const interUser = new mongoose.Schema({
			
        Name: String,
        Email: String,
        Phone: String,
        Linkedin: String,
        Github: String,
       about: String,
       internshipId: String,
    
    })
    const interUserModel = models.internshipUser || model('internshipUser', interUser)
    
    
    const IntershipData = new mongoose.Schema({
    InternshipName:{type: String, required: true},
    internshipId: {type: String, required: true},
    
    
    
         // Add more fields as needed
    });
    const InternData = models.internShipData || model('internShipData', IntershipData)


  console.log("working");

  try {
    const { link } = req.body;
    console.log(req.body)
    const internshipId = link.url1
    const Email = link.url
    console.log(internshipId)
    await connectToDatabase();
    let data = await interUserModel.find({ internshipId, Email });
    console.log(data)
    if (data) {
      return res.status(200).json({ message: "successfully fetched", data });
    } else {
      return res.status(200).json({ message: "data not found" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
}

export default submitForm;
