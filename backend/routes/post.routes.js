import express from 'express';
const { loginUser } = require('../controllers/post.controller');

const router = express.Router();

router.post('/postConnUser', loginUser);

export default router;