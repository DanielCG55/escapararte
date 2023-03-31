import { db_plugin } from "./db";
import { FastifyPluginAsync } from "fastify";
import fastifyFormBody from "@fastify/formbody";
import fastifyBlipp from "fastify-blipp";
import cors from "@fastify/cors";
import { create_card_plugin } from "../routes/cards/create_card";
import { get_card_plugin } from "../routes/cards/get_card";
import fastifyMultipart from "@fastify/multipart";

const cards_plugin: FastifyPluginAsync = async (app) => {
    await app.register(create_card_plugin);
    await app.register(get_card_plugin);
};

export const main_app: FastifyPluginAsync = async (app) => {
    app.register(db_plugin);

    app.register(cors);

    app.register(fastifyBlipp);

    app.register(fastifyFormBody);

    app.register(fastifyMultipart);

    await app.register(cards_plugin);

    app.blipp();
};
