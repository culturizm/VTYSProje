const mongoose = require("mongoose")

const connectDb = async () => {
    try {
        const connect = await mongoose.connect('mongodb+srv://okankilicarslan9:ogUqTUQn8y5LEpzq@cluster0.9bkkkhm.mongodb.net/vtysProje?retryWrites=true&w=majority')
        console.log("Database connected:",connect.connection.name);
    } catch (err) {
        console.log(err);
        process.exit(1)
    }
}

module.exports = connectDb
