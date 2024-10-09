import express from 'express';
const port = 5500;

const app = express();

app.listen(port, () => console.log("server ON -> port : " + port));