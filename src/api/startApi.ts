import fastify from 'fastify';
import { log } from '../utils/log';

export async function startApi() {

    // Configure
    log('Starting API...');

    // Start API
    const app = fastify({
        logger: true
    });
    app.get('/', function (request, reply) {
        reply.send('Welcome to Server!');
    });


    // Start
    const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
    await app.listen({ port, host: '0.0.0.0' });

    // End
    log('API ready on port http://localhost:' + port);
}