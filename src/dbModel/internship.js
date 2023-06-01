import mongoose, { model, models } from 'mongoose';

const formDataSchema = new mongoose.Schema({
    Designation: String,
    about: String,
    mode: String,
    Certificate: String,
    Duration: String,
    ComapnyName: String,
    HRName: String,
    Email: String,
    Country: String,
    Location: String,
    tag: String,
    // Add more fields as needed
});
const FormData = models.FormData || model('FormData', formDataSchema)
export default FormData;
