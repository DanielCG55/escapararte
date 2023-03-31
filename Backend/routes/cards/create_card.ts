import { FastifyPluginAsync } from "fastify";
import { CardModel } from "../../models/card_model";
import { ICard } from "../../types/card";

export const create_card_plugin: FastifyPluginAsync = async (app) => {
    app.post<{
        Body: ICard;
    }>("/create_card", async (request, reply) => {
        const { imageSrc, title, author, description, origin } = request.body;

        await CardModel.create({
            imageSrc,
            title,
            author,
            description,
            origin,
        });

        return {
            status: "created",
        };
    });
};
