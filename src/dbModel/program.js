import mongoose, { model, models } from 'mongoose';

const formDataSchema = new mongoose.Schema({
    DynamicData: { type: mongoose.Schema.Types.Mixed, }
    // Add more fields as needed
});
const FormData = models.programData || model('programData', formDataSchema)
export default FormData;
