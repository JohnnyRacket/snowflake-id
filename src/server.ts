import fastify from 'fastify';
import snowflakeGenerator from './snowflakeGenerator';

const app = fastify();

app.get('/generate', async (req, res) => {
    //const id = snowflakeGenerator.next().value;
    let list = [];
        for(let i = 0; i < 5000; i++){
            let value = String(snowflakeGenerator.next().value);
            list.push(BigInt(value));
        }
        let sortedList = [...list];
        sortedList.sort();
        let obj = {list: list.toString(), sortedList: sortedList.toString()};

    return obj;
});

// Run the server
const start = async () => {
    try {
        const PORT = process.env.PORT || 3000;
        await app.listen(PORT, '0.0.0.0');
        console.log(`Now listening on PORT ${PORT}`)
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
}

start();