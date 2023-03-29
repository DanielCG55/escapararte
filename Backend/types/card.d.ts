import { Document } from "mongoose";

export interface ICard extends Document {
    imageSrc: string;
    title: string;
    author: string;
    description: string;
}

export interface ICardSeed {
    imageSrc: string;
    title: string;
    author: string;
    description: string;
}
