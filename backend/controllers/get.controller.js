import getText from "../../src/textPicker.js";
import GameResults from '../models/gameResults.model.cjs';
import User from '../models/user.model.cjs';
import {removeDuplicates} from "../utils/arrayTreatment.js";

export const getTextHandler = async (req, res) => {
    try {
        const text = await getText();
        res.json({ text });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getClassmentHandler = async (req, res) => {
    try {
        const classement = await GameResults.find().sort({ wpm: "desc" });
        for (let i = 0; i < classement.length; i++) {
            const userName = await getUserName(classement[i].userId);
            classement[i] = {
                userId: classement[i].userId,
                user: userName,
                wpm: classement[i].wpm,
                date: classement[i].date
            };
        }
        classement.value = removeDuplicates(classement);
        //Update the user datas if necessary
        for (let i = 0; i < classement.length; i++) {
            await User.updateOne({ _id: classement[i].userId }, { classement: i + 1 });
        }

        res.json({ classement });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getUserName = async (userId) => {
    try {
        const user = await User.findOne({ _id: userId });
        return user ? user.name : null;
    } catch (error) {
        throw new Error('Error fetching user name');
    }
};