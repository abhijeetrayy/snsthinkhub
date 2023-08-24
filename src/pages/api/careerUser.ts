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
	Id: {type: String, required: true},
   
  
  
   			 // Add more fields as needed
		});
 	const careerIdData = models.careeridsData || model('careeridsData', careerIds)

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    
    console.log("working")
   
   try {
   		const { Name, Email, Phone, Linkedin, Github, about, Id } = req.body;
   		 console.log(Id);
        await connectToDatabase();
        let checkUserIsAlreadyFilled = await careerUserModel.findOne({Id, Email})
        if (checkUserIsAlreadyFilled){
        	return res.status(200).json({message: "User You have already Filled the internship"})
        }
        else
        {let check = await careerIdData.findOne({Id})
                if(check){
        
        
        
        
        			      console.log("milgya")
        			     const saveusers = new careerUserModel({
        			     					        	 	
        			     			Name,
        						   	Email,
        						   	Phone,
        						   	Linkedin,
        						   	Github,
        						    about,
        						    Id,
          	
        			        	 })
        			        	await saveusers.save()
        			        
        			       } else{
        
        
        			        	 check =new careerIdData({
        			        		Id ,
        			        		
        			        		
        			        	})
        			        	 await check.save()
        			        	 const saveusers = new careerUserModel({
        			        	 	Id,
        			        	 	Name,
        						   	Email,
        						   	Phone,
        						   	Linkedin,
        						   	Github,
        						    about,
          	
        			        	 })
        			        	await saveusers.save()
        			        
        					        	
        			        }
        			       
        
        	        	
        
        
        	        
               
           
                 return res.status(200).json({ message: "Form data saved successfully"});}
    } catch (error) {
        return res.status(500).json(error);
    }
       
}

export default submitForm;