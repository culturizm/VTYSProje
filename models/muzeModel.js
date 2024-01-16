const mongoose = require("mongoose")

const muzeSchema = new mongoose.Schema({
    muzeAd: {
        type: String,
        required: [true, "Enter username"],
        unique: [true]
    },
    muzeAciklama: {
        type: String,
        required: [true, "Enter email"]
    },
    calismaSaatleri: {
        type: String,
        required: [true, "Enter password"]
    },
    girisDetay: {
        type: String,
        required: [true, "Enter password"]
    },
    muzeAdres: {
        type: String,
        required: [true, "Enter password"]
    },
    muzeMail: {
        type: String,
        required: [true, "Enter password"]
    },
    muzeTel: {
        type: String,
        required: [true, "Enter password"]
    },
    muzeWebSite: {
        type: String,
        required: [true, "Enter password"]
    },
    sehir: {
        type: String,
        required: [true, "Enter password"]
    },
    ilce: {
        type: String,
        required: [true, "Enter password"]
    },
}, {
    timestamps: true
})

const muzeDb = mongoose.model("muze", muzeSchema)
module.exports = muzeDb