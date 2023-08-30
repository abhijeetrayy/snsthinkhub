import connectToDatabase from "../../lib/dbConnect";

import mongoose, { model, models } from 'mongoose';




async function submitForm(req, res) {
	const courseUserSchema = new mongoose.Schema({
			
		   	Name: String,
		   	Email: String,
		   
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
   		const { formData, CourseId } = req.body;
		const Email = formData.email
		const Name = formData.name
   		await connectToDatabase();
        let checkUserIsAlreadyFilled = await courseUserModel.findOne({CourseId, Email})
        if (checkUserIsAlreadyFilled){
        	return res.status(200).json({message: "User You have already Registered for the Course"})
        }
        else
        {let check = await courseDataModel.findOne({CourseId})
                if(check){
        
        
        
        
        			      console.log("milgya")
        			     const saveusers = new courseUserModel({
        			     					        	 	
        			     			Name,
        						   	Email,
        						   	
        						    CourseId,
          	
        			        	 })
        			        	await saveusers.save()
        			        
        			       } else{
        
        
        			        	 check =new courseDataModel({
        			        		CourseId ,
        			        		
        			        		
        			        	})
        			        	 await check.save()
        			        	 const saveusers = new courseUserModel({
        			        	 	Name,
        						   	Email,
        						   	
        						    CourseId,
          	
        			        	 })
        			        	await saveusers.save()
        			        
        					        	
        			        }
        			       
        
        	        	
        
        
        	        
               
           
                 return res.status(200).json({ message: "Form data saved successfully"});}
    } catch (error) {
        return res.status(500).json(error);
    }
       
}

export default submitForm;