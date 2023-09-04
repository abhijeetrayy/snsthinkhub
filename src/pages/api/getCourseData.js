import connectToDatabase from "../../lib/dbConnect";

import mongoose, { model, models } from 'mongoose';




async function submitForm(req, res) {
	

	const CouserDataSchema = new mongoose.Schema({
		CourseName: { type: String, required: true },
		CourseId: { type: String, required: true },



		// Add more fields as needed
	});
	const courseDataModel = models.coursesData || model('coursesData', CouserDataSchema)



	console.log("working")

	try {

		await connectToDatabase();
		let data = await courseDataModel.find()
		console.log(data?.data)
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