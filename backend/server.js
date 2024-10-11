import express from 'express';
import cors from 'cors';
import getRoutes from "./routes/get.routes.js";
//const port = 5500;

const app = express();

app.use(cors());

//route for get request
app.use('/get', getRoutes);


const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
