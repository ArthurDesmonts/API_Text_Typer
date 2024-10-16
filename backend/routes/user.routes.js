import express from 'express';
import {signup, login, getUserInfo} from "../controllers/user.controller.js";

const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);
router.get('/userInfo', getUserInfo);

export default router;