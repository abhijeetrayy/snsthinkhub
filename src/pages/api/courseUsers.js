import connectToDatabase from "../../lib/dbConnect";

import mongoose, { model, models } from 'mongoose';




async function submitForm(req, res) {
	

	const courseUserSchema = new mongoose.Schema({

		Name: String,
		Email: String,
		RazorpayOrderId: String,
		RazorpayPaymentId: String,
		RazorpaySignature: String,
		price: String,

		CourseId: String,

	})
	const courseUserModel = models.courseUser || model('courseUser', courseUserSchema)

if(req.method !== "POST"){
    return  res.status(200).json({ message: "404" })
}
	console.log("working")

	try {
        const {url} = req.body
        console.log(url)
        const CourseId = req.body?.url
        console.log(CourseId)
		await connectToDatabase();
		let data = await courseUserModel.find({CourseId})
		console.log(data)
		if (data) {
			return res.status(200).json({ message: "successfully fetched", data })
		}
		else {


			return res.status(200).json({ message: "data not found" });
		}









	} catch (error) {
        console.log(error)
		return res.status(500).json(error);
	}

}

export default submitForm;