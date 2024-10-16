import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI;
        if (!uri) {
            throw new Error('MONGO_URI is not defined');
        }
        console.log(`Connecting to MongoDB with URI: ${uri}`);
        mongoose.set('strictQuery', false);
        await mongoose.connect(uri);
        console.log('Connected to the database');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

export default connectDB;