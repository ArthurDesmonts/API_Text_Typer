import express from 'express';
import {insertGameResults} from "../controllers/post.controller.js";

const router = express.Router();

router.post('/insertResult', insertGameResults);

export default router;