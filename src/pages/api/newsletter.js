import connectToDatabase from "../../lib/dbConnect";

import mongoose, { model, models } from 'mongoose';




async function submitForm(req, res) {
	const contact = new mongoose.Schema({
			
		   	Email: String,
		   	fromWhere: String,
		   
		   
  	
	})
	const newsLaterModel = models.newsletter || model('newsletter', contact)

	
	

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    
    console.log("working")
   
   try {
   		const {Email, fromWhere} = req.body;
   		
        await connectToDatabase();
        
	     const saveContact = new newsLaterModel({
	     					        	 	
	     			
				   	Email, 
				   	fromWhere,
				   
				

	        	 })
	        	
	        
	    
	      await saveContact.save()
		 return res.status(200).json({ message: "Form data saved successfully"})
    } catch (error) {
        return res.status(500).json(error);
    }
       
}

export default submitForm;