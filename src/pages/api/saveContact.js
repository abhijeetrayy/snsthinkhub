import connectToDatabase from "../../lib/dbConnect";

import mongoose, { model, models } from 'mongoose';




async function submitForm(req, res) {
	const contact = new mongoose.Schema({
			
		   	Name: String,
		   	Email: String,
		   	Phone: String,
		   
		    Message: String,
		   
  	
	})
	const contactUsModel = models.contactUs || model('contactUs', contact)

	
	

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    
    console.log("working")
   
   try {
   		const { Name, Email, Phone, Message} = req.body;
   		
        await connectToDatabase();
        
	     const saveContact = new contactUsModel({
	     					        	 	
	     			Name,
				   	Email,
				   	Phone,
				   
				    Message,
				

	        	 })
	        	
	        
	    
	      await saveContact.save()
		 return res.status(200).json({ message: "Form data saved successfully"})
    } catch (error) {
        return res.status(500).json(error);
    }
       
}

export default submitForm;