import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import getRoutes from "./routes/get.routes.js";
import postRoutes from "./routes/post.routes.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();

//DB connection
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/get', getRoutes);
app.use('/post', postRoutes);
app.use('/user', userRoutes);


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;