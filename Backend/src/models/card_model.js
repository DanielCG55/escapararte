import mongoose, { Schema } from "mongoose";
const schema = new Schema({ title: { type: String, required: true } });
export const CardModel = mongoose.model("card", schema);
