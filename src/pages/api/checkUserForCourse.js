import connectToDatabase from "../../lib/dbConnect";

import mongoose, { model, models } from 'mongoose';




async function submitForm(req, res) {
	const courseUserSchema = new mongoose.Schema({
			
		   	Name: String,
		   	Email: String,
		   	Phone: String,
		   	University: String,
		   	Course: String,
		    Year: String,
		    CourseId: String,
  	
	})
	const courseUserModel = models.courseUser || model('courseUser', courseUserSchema)

	
	const CouserDataSchema = new mongoose.Schema({
	CourseId: {type: String, required: true},
   
  
  
   			 // Add more fields as needed
		});
 	const courseDataModel = models.courseData || model('courseData', CouserDataSchema)

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    
    console.log("working")
   
   try {
   		const { Name, Email, Phone, University, Course, Year, CourseId } = req.body;
   		
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