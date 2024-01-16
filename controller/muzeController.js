const asyncHandler = require("express-async-handler")
const muzeDb = require("../models/muzeModel")

const getAllmuzeler = asyncHandler(async (req, res) => {
    const muzeler = await muzeDb.find()
    res.status(200).json(muzeler)
})

const getmuzeByCity = asyncHandler(async (req, res) => {
    const {sehir}=req.body
    if(!sehir){
        res.status(404)
        throw new Error("Geçersiz şehir")
    }
    const muze = await muzeDb.find({sehir})
    if(!muze){
        res.status(404)
        throw new Error("Müze not found")
    }
    res.status(200).json(muze)
})


module.exports = {
    getAllmuzeler,
    getmuzeByCity
}