import { FastifyPluginAsync } from "fastify";
import { CardModel } from "../../models/card_model";

export const get_all_cards_plugin: FastifyPluginAsync = async (app) => {
    app.get<{ Querystring: { category: string } }>(
        "/get_all_cards",
        async (request, reply) => {
            const { category } = request.query;
            try {
                return await CardModel.find({ category });
            } catch (err) {
                throw new Error("The card doesn't exist");
            }
        }
    );
};
