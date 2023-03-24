import { CardModel } from "./models/card_model";
import mongoose from "mongoose";
import { DB_URL } from "./config";
import { ICardSeed, ICard } from "./types/card";

const card: ICardSeed = {
    imageSrc: "./anubis.jpg",
    title: "Prueba",
    author: "Yo mismo",
    description: "Primera carta de prueba",
};

const cardPrototype: ICardSeed[] = [];
for (let i = 0; i < 5; i++) {
    cardPrototype.push(card);
}

(async () => {
    await mongoose.connect(DB_URL);

    await CardModel.collection.drop();

    await CardModel.create(cardPrototype);

    await mongoose.disconnect();
})();
