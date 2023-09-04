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
	});
	const interUserModel =
		models.internshipUser || model("internshipUser", interUser);

	const IntershipData = new mongoose.Schema({
		InternshipName:{type: String, required: true},
		internshipId: { type: String, required: true },

		// Add more fields as needed
	});
	const InternData = models.internshipData || model("internshipData", IntershipData);

	console.log("working");

	try {
		await connectToDatabase();
		let data = await InternData.find();
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
