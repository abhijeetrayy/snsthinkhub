import connectToDatabase from "../../lib/dbConnect";

import mongoose, { model, models } from 'mongoose';




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



         // Add more fields as needed
 });
const careerIdData = models.careeridsData || model('careeridsData', careerIds)


	console.log("working")

	try {

		await connectToDatabase();
		let data = await careerIdData.find()
		console.log(data)
		if (data) {
			return res.status(200).json({ message: "successfully fetched", data })
		}
		else {


			return res.status(200).json({ message: "data not found" });
		}









	} catch (error) {
		return res.status(500).json(error);
	}

}

export default submitForm;