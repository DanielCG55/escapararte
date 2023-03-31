import { FastifyPluginAsync } from "fastify";
import { CardModel } from "../../models/card_model";

export const delete_card_plugin: FastifyPluginAsync = async (app) => {
    app.delete("/delete_card", async (request, reply) => {
        await CardModel.deleteOne();
        return {
            status: "deleted",
        };
    });
};
