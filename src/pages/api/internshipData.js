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
		    internshipId: String,
  	
	})
	const interUserModel = models.internshipUser || model('internshipUser', interUser)

	
	const IntershipData = new mongoose.Schema({
		InternshipName:{type: String, required: true},
		internshipId: {type: String, required: true},
   
  
  
   			 // Add more fields as needed
		});
 	const InternData = models.internShipData || model('internShipData', IntershipData)

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    
    console.log("working")
   
   try {
   		const { formData, name } = req.body;
		const Name = formData.Name
		const Email = formData.Email
		const Phone = formData.Phone
		const Linkedin = formData.Linkedin
		const Github = formData.Github
		const about = formData.about
		const internshipId = formData.Id
		const InternshipName = name
   		 console.log(internshipId);
   		 console.log(InternshipName);
        await connectToDatabase();
        let checkUserIsAlreadyFilled = await interUserModel.findOne({internshipId, Email})
        if (checkUserIsAlreadyFilled){
        	return res.status(200).json({message: "User You have already Filled the internship"})
        }
        else
        {let check = await InternData.findOne({internshipId})
                if(check){
        
        
        
        
        			      console.log("milgya")
        			     const saveusers = new interUserModel({
        			     					        	 	
        			     			Name,
        						   	Email,
        						   	Phone,
        						   	Linkedin,
        						   	Github,
        						    about,
        						    internshipId,
          	
        			        	 })
        			        	await saveusers.save()
        			        
        			       } else{
        
        
        			        	 check =new InternData({
									InternshipName,
        			        		internshipId ,
        			        		
        			        		
        			        	})
        			        	 await check.save()
        			        	 const saveusers = new interUserModel({
        			        	 	internshipId,
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