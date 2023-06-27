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

  
    
    console.log("working")
   
   try {
   		
   		await connectToDatabase();
        let data = await courseUserModel.findOne()
        if (data){
        	return res.status(200).json({message: "successfully fetched", data})
        }
        else
        {
        			        
        					        	
        			          return res.status(200).json({ message: "data not found"});}
        			       
        
        	        	
        
        
        	        
               
           
             
    } catch (error) {
        return res.status(500).json(error);
    }
       
}

export default submitForm;