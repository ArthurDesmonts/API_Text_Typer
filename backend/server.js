import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import getRoutes from "./routes/get.routes.js";

dotenv.config();

//DB connection
connectDB();

const app = express();

app.use(cors());

//route for get request
app.use('/get', getRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;