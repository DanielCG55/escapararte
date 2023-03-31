import { ICard } from "../types/card";

import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    imageSrc: { type: String, required: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    origin: { type: String, required: true },
});

export const CardModel = mongoose.model<ICard>("card", schema);
