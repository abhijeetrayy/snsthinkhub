import connectToDatabase from "../../lib/dbConnect";

import mongoose, { model, models } from "mongoose";

async function submitForm(req, res) {
    const careerUser = new mongoose.Schema({
			
        Name: String,
        Email: String,
        Phone: String,
        Linkedin: String,
        Github: String,
     about: String,
     Id: String,

})
const careerUserModel = models.careerData || model('careerData', careerUser)


const careerIds = new mongoose.Schema({
 CareerTitle: {type: String, required: true},
 Id: {type: String, required: true},
 
 
 

 });
const careerIdData = models.careeridsData || model('careeridsData', careerIds)


  console.log("working");

  try {
    const { url } = req.body;
    const Id = url
    console.log(Id)
    await connectToDatabase();
    let data = await careerUserModel.find({ Id });
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
