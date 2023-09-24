import mongoose from 'mongoose';

async function connectToDatabase() {
    try {
        await mongoose.connect("mongodb+srv://snsthinkhub:lrh1RPGEfotjN36U@cluster0.jrb1dsy.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Failed to connect to MongoDB:', error);
    }
}

export default connectToDatabase;
