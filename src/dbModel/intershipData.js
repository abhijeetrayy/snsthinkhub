
import mongoose, { model, models } from 'mongoose';

 const SingleIntershipData = new mongoose.Schema({
   	Name: String,
   	Email: String,
   	Phone: String,
   	Linkedin: String,
   	Github: String,
    about: String,

  	
  
  
    // Add more fields as needed
});



const IntershipData = new mongoose.Schema({
	internshipId: {type: String, required: true},
   SingleIntership: [SingleIntershipData],
  	
  
  
    // Add more fields as needed
});
 const InternData = models.internshipData || model('internshipData', IntershipData)
export default InternData