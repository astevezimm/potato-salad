import mongoose from 'mongoose';
//const mongoose = require("mongoose");
//require("dotenv").config();

let cached = global.mongoose;
if (!cached) {
    cached = global.mongoose = {
        connection: null,
        promise: null
    };
}

async function connect() {
    if (cached.connection)
        return cached.connection;

    if (!cached.promise) {
        cached.promise = mongoose.connect(process.env.DB_URL, { bufferCommands: false })
            .then(connection => connection);
    }
    
    cached.connection = await cached.promise;
    return cached.connection;
}

export default connect;
//exports.connect = connect;