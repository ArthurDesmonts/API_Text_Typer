import express from 'express';
import getRoutes from "./routes/get.routes.js";
const port = 5500;

const app = express();

//route for get request
app.use('/get', getRoutes);

app.listen(port, () => console.log("server ON -> port : " + port));

