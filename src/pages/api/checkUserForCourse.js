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

	
	

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    
    console.log("working")
   
   try {
   		const CourseId = req.body.CourseId
   		const Email = req.body.formData.email
   		
		
        await connectToDatabase();
        let checkUserIsAlreadyFilled = await courseUserModel.findOne({CourseId, Email})
        if (checkUserIsAlreadyFilled){
        	return res.status(200).json({message: "User You have already Registered for the Course"})
        }
        else
        {
        	        
               
           
                 return res.status(200).json({ message: "User not found, to be continuied to process the payment"});}
    } catch (error) {
        return res.status(500).json(error);
    }
       
}

export default submitForm;