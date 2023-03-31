import { FastifyPluginAsync } from "fastify";
import { CardModel } from "../../models/card_model";

interface IRequestQuery {
    origin: string;
}

export const get_card_plugin: FastifyPluginAsync = async (app) => {
    app.get("/get_all_cards", async (request, reply) => {
        const { origin } = request.query as IRequestQuery;
        try {
            return await CardModel.find({ origin: origin }).exec();
        } catch (err) {
            throw new Error("The card doesn't exist");
        }
    });
};
