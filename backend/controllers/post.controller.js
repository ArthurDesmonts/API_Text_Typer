import GameResults from '../models/gameResults.model.cjs';
import User from '../models/user.model.cjs';

export const insertGameResults = async (req, res) => {
    const gameResult = new GameResults({
        userId: req.body.userId,
        wpm: req.body.wpm
    });
    try {
        await gameResult.save();

        //Update the user datas if necessary
        const userId = req.body.userId;
        const results = await GameResults.find({ userId: userId });

        const recordWPM = results.reduce((max, result) => result.wpm > max ? result.wpm : max, results[0].wpm);
        const moyenneWPM = Math.round(results.reduce((sum,result) => sum + result.wpm, 0) / results.length);

        await User.updateOne({ _id: userId }, { recordWPM, moyenneWPM });
        res.status(201).json({ message: 'Game result saved | user updated' });
    } catch (error) {
        res.status(400).json({ error });
    }
}

