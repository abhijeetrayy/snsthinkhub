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
	const interUserModel = models.intershipUser || model('intershipUser', interUser)

	
	const IntershipData = new mongoose.Schema({
	internshipId: {type: String, required: true},
   
  
  
   			 // Add more fields as needed
		});
 	const InternData = models.internshipData || model('internshipData', IntershipData)

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    
    console.log("working")
   
   try {
   		const { Name, Email, Phone, Linkedin, Github, about, internshipId } = req.body;
   		 console.log(internshipId);
        await connectToDatabase();
        let check = await InternData.findOne({internshipId})
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
			       

	        	


	        
       
   
         return res.status(200).json({ message: "Form data saved successfully"});
    } catch (error) {
        return res.status(500).json(error);
    }
       
}

export default submitForm;