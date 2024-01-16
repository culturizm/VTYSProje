const mongoose = require("mongoose")

const otelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Enter username"],
        unique: [true]
    },
    city: {
        type: String,
        required: [true, "Enter email"]
    },
    country: {
        type: String,
        required: [true, "Enter password"]
    },
    street: {
        type: String,
        required: [true, "Enter password"]
    },
    phone: {
        type: String,
        required: [true, "Enter password"]
    },
    fax: {
        type: String,
        required: [true, "Enter password"]
    },
    website: {
        type: String,
        required: [true, "Enter password"]
    },
}, {
    timestamps: true
})

const otelDb = mongoose.model("otel", otelSchema)
module.exports = otelDb