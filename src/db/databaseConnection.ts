import mongoose from 'mongoose';
import dotenv from 'dotenv';

mongoose.Promise = global.Promise;
dotenv.config();

const connection = process.env.ATLAS_URI || '';

const connectToDatabase = async (): Promise<void> => {
  await mongoose.connect(connection);
};

export { connectToDatabase };
