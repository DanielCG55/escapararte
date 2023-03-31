import { FastifyPluginAsync } from "fastify";

export const index_plugin: FastifyPluginAsync = async (app) => {
    await app.get("/", (request, reply) => {
        return { status: "Server On" };
    });
};
