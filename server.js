const http = require("http");
//MongoDB define
let db;
const {MongoClient} = require("mongodb");

const connectionString =  "mongodb+srv://tekken:bKLtDjTOpLYNX6PW@cluster0.l2tiwhc.mongodb.net/Reja?retryWrites=true&w=majority";

const client = new MongoClient(connectionString);

async function run() {
    try {
        await client.connect();
        console.log("mongoDB connection succeed!");
        // console.log(client);
        module.exports = client;

        const app = require("./app");

        const server = http.createServer(app);
        const PORT = 3000;
        server.listen(PORT, function() {
            console.log(`The server is running on port: ${PORT}, http://localhost:${PORT}`);
        });
    } catch (err) {
        console.log("ERROR connecting to mongoDB database: ", err);
    }
}

run();

