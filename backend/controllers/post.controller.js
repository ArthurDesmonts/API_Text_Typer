import GameResults from '../models/gameResults.model.cjs';

export const insertGameResults = async (req, res) => {
    const gameResult = new GameResults({
        userId: req.body.userId,
        wpm: req.body.wpm
    });
    try {
        await gameResult.save();
        res.status(201).json({ message: 'Game result saved' });
    } catch (error) {
        res.status(400).json({ error });
    }
}

