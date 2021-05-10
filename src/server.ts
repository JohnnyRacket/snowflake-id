import fastify from 'fastify';
import snowflakeGenerator from './snowflakeGenerator';

const app = fastify();

// get machine id from env or generate random 10 bit int
let machine = parseInt(process.env.MACHINE_ID) || Math.floor(Math.random() * 1024);
console.log(`MACHINE_ID = ${machine}`);
let generator = snowflakeGenerator(machine);

// endpoint for vending ids
app.get('/api/uint64', async (req, res) => {
    const id = generator.next().value;
    return id;
});

// Run the server
const start = async () => {
    try {
        const PORT = process.env.PORT || 3000;
        await app.listen(PORT, '0.0.0.0');
        console.log('HEALTHY')
        console.log(`PORT = ${PORT}`)
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
}

start();