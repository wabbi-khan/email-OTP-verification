import mongoose, { mongo } from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

async function connect() {
    // create new mongodb instance whenever you start your server
    const mongod = await MongoMemoryServer.create();
    const getUri = mongod.getUri();
    mongoose.set('strictQuery', true);
    const db = await mongoose.connect(getUri);
    console.log('Database Connected');
    return db;
}
export default connect;