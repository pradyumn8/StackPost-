import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => console.log('Database Connected')
        )
        await mongoose.connect(`${process.env.MONGO_URI}/stackblog`)
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit the process with failure
        
    }
}

export default connectDB