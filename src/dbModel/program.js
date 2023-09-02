import mongoose, { model, models } from 'mongoose';

const formDataSchema = new mongoose.Schema({
   
    CourseName: String,
    DynamicData: { type: mongoose.Schema.Types.Mixed, }
    // Add more fields as needed
});
const FormData = models.programData || model('programData', formDataSchema)
export default FormData;
