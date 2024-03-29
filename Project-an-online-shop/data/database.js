const mongoDb = require("mongodb");

const MongoClient = mongoDb.MongoClient;

let database;

async function connectToDatabase() {
    const client = await MongoClient.connect("mongodb://localhost:27017");
    database = client.db("online-shop");
}

function getDb() {
    if(!database) {
        throw new Error("You must connect to the Database first!");
    }
    return database;
}

module.exports = {
    connectToDatabase: connectToDatabase,
    getDb: getDb,
}