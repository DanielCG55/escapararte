import { CardModel } from "../models/card_model";
import mongoose from "mongoose";
import { DB_URL } from "./config";

(async () => {
    await mongoose.connect(DB_URL);

    await CardModel.collection.drop();

    await CardModel.create();

    await mongoose.disconnect();
})();
