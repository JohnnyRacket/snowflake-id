import fastify from 'fastify';
import snowflakeGenerator from './snowflakeGenerator';

const app = fastify();

app.get('/generate', async (req, res) => {
    const id = snowflakeGenerator.next().value;
    return id;
});

// Run the server
const start = async () => {
    try {
        await app.listen(3000);
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
}

start();