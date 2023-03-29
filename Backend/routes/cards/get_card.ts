import { FastifyPluginAsync } from "fastify";
import { CardModel } from "../../models/card_model";

export const get_card_plugin: FastifyPluginAsync = async (app) => {
    app.get("/get_all_cards", async (request, reply) => {
        try {
            return await CardModel.find();
        } catch (err) {
            throw new Error("The card doesn't exist");
        }
    });
};
