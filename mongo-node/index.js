const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1";

const client = new MongoClient(uri);

const data1 = {
    name: 'VK',
    email: 'VK@gmail.com',
    phone: 8965,
    address: 'bengaluru',
};

const main = async () => {
    await client.connect();
    const db = client.db("students-api");
    const collection = db.collection("students");

    await collection.insertOne(data1);

    const data = await collection.find({ "address": "bengaluru" }).toArray();
    console.log(data);
    return "done";
};

main().then(console.log()).catch((e) => console.log(e)).finally(() => client.close());