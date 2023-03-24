import { ICard } from "../types/card";

import mongoose, { Schema } from "mongoose";

const schema = new Schema({ title: { type: String, required: true } });

export const CardModel = mongoose.model<ICard>("card", schema);
