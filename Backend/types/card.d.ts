import { Document } from "mongoose";

export interface ICard extends Document {
    imageSrc: string;
    title: string;
    author: string;
    description: string;
    category: string;
}
