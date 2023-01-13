const mongodb = require("mongodb");
const {MongoClient} = require("mongodb");
const mongoClient = mongodb.mongoClient;
let database;
async function connect() {
    const client = await MongoClient.connect('mongodb://localhost:27017');
    database = client.db('blog');
}
function getDb() {
    if(!database) {
        throw {message: "Database connection not established!"};
    }
    return database;
}
module.exports = {
    connectToDatabase: connect,
    getDb: getDb
};