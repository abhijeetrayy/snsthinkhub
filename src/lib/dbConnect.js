import mongoose from 'mongoose';

async function connectToDatabase() {
    try {
        await mongoose.connect("mongodb+srv://abhi-mongo:z9Ra7Y5W60OMm6hM@cluster0.inxto.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Failed to connect to MongoDB:', error);
    }
}

export default connectToDatabase;
