import fastify from 'fastify';
import pino from 'pino';
import { main_app } from './app';
import { PORT } from './config';

// Server configuration
const server = fastify({
    logger: pino({
        transport: {
            target: 'pino-pretty',
        },
    }),
    disableRequestLogging: true,
    ignoreTrailingSlash: true,
});

// Register main plugin
server.register(main_app);

// Server port
server.listen({ port: PORT, host: '0.0.0.0' }).catch((e) => {
    server.log.error(e);
    process.exit(1);
});