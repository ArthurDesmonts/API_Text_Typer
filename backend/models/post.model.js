import mongoose from 'mongoose';

const postUserConnSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        pass: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);