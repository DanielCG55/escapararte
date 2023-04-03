import { FastifyPluginAsync } from "fastify";
import { CardModel } from "../../models/card_model";
import { ICard } from "../../types/card";

interface ICardBody extends ICard {}

export const create_card_plugin: FastifyPluginAsync = async (app) => {
    app.post<{
        Body: ICardBody;
    }>("/create_card", async (request, reply) => {
        const cardData = request.body;

        await CardModel.create(cardData);

        return {
            status: "created",
        };
    });
};
