import User from "../models/user.model.cjs";
import {hash, compare} from "bcrypt";

export const signup = (req, res, next) => {
    hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                name: req.body.name,
                password: hash,
                classement: 0,
                recordWPM: 0,
                moyenneWPM: 0
            });
            user.save()
                .then(() => res.status(201).json({ userId: user._id }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

export const login = (req, res, next) => {
    User.findOne({ name: req.body.name })
        .then(user => {
            if (!user) {
                return res.status(401).json({ message: 'Paire login/mot de passe incorrecte'});
            }
            compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' });
                    }
                    res.status(200).json({
                        userId: user._id
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

export const getUserInfo = (req, res, next) => {
    const userId = req.query.userId;
    User.findOne({_id: userId})
        .then(user => {
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.status(200).json({
                name: user.name,
                creationDate: user.creationDate,
                classement: user.classement,
                recordWPM: user.recordWPM,
                moyenneWPM: user.moyenneWPM
            });
        })
        .catch(error => res.status(500).json({ error }));
};
