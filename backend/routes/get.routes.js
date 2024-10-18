import express from 'express';
import {getTextHandler, getClassmentHandler} from "../controllers/get.controller.js";

const router = express.Router();

router.get('/getText', getTextHandler);
router.get('/classment', getClassmentHandler);

export default router;