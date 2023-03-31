import { FastifyPluginAsync } from "fastify";
import { CardModel } from "../../models/card_model";

export const delete_card_plugin: FastifyPluginAsync = async (app) => {
    app.delete<{ Querystring: { _id: string } }>(
        "/delete_card",
        async (request, reply) => {
            const { _id } = request.query;
            await CardModel.findByIdAndDelete(_id);
            return {
                status: "deleted",
            };
        }
    );
};
