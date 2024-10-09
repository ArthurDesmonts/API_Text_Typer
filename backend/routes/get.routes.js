import express from 'express';
import getText from "../../src/textPicker.js";
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const text = await getText();
        res.json({ text });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;