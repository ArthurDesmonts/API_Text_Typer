import express from 'express';
import {getTextHandler, getClassmentHandler, getResults} from "../controllers/get.controller.js";

const router = express.Router();

router.get('/getText', getTextHandler);
router.get('/classment', getClassmentHandler);
router.get('/getResults', getResults);

export default router;