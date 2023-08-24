import connectToDatabase from "../../lib/dbConnect";

import mongoose, { model, models } from 'mongoose';




async function submitForm(req, res) {
	const interUser = new mongoose.Schema({
			
		   	Name: String,
		   	Email: String,
		   	Phone: String,
		   	Linkedin: String,
		   	Github: String,
		    about: String,
		    Id: String,
  	
	})
	const interUserModel = models.internshipUser || model('internshipUser', interUser)

	
	const IntershipData = new mongoose.Schema({
	Id: {type: String, required: true},
   
  
  
   			 // Add more fields as needed
		});
 	const InternData = models.internshipData || model('internshipData', IntershipData)

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    
    console.log("working")
   
   try {
   		const { Name, Email, Phone, Linkedin, Github, about, Id } = req.body;
   		 console.log(Id);
        await connectToDatabase();
        let checkUserIsAlreadyFilled = await interUserModel.findOne({Id, Email})
        if (checkUserIsAlreadyFilled){
        	return res.status(200).json({message: "User You have already Filled the internship"})
        }
        else
        {let check = await InternData.findOne({Id})
                if(check){
        
        
        
        
        			      console.log("milgya")
        			     const saveusers = new interUserModel({
        			     					        	 	
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
        
        
        			        	 check =new InternData({
        			        		Id ,
        			        		
        			        		
        			        	})
        			        	 await check.save()
        			        	 const saveusers = new interUserModel({
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