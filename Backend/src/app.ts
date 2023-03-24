import { db_plugin } from "./db";
import { FastifyPluginAsync } from "fastify";
import fastifyFormBody from "@fastify/formbody";
import fastifyBlipp from "fastify-blipp";
import cors from "@fastify/cors";

export const main_app: FastifyPluginAsync = async (app) => {
    app.register(db_plugin);

    app.register(cors);

    app.register(fastifyBlipp);

    app.register(fastifyFormBody);
};
