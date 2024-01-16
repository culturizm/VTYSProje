const asyncHandler = require("express-async-handler")
const otelDb = require("../models/otelModel")

const getAllotels = asyncHandler(async (req, res) => {  // Middleware Pattern (express-async-handler) kullanılmıştır. Hataları otomatik olarak global hata işleyiciye yönlendirir. Eğer kullanılmasaydı, her asenkron fonksiyonun içinde try-catch blokları eklememiz gerekecekti.
    const otel = await otelDb.find()  // Async/Await Pattern kullanılmıştır. Kodun daha okunabilir ve yönetilebilir olmasını sağlar. Asenkron operasyonlardan dönen değerleri kolayca yakalayabilmemizi sağlar.
    res.status(200).json(otel)
})

const getotel = asyncHandler(async (req, res) => {  // Middleware Pattern (express-async-handler) kullanılmıştır.
    const otel = await otelDb.findById(req.params.id)  // Async/Await Pattern kullanılmıştır.
    if (!otel) {
        res.status(404)
        throw new Error("Not found")  // Error Handling Pattern kullanılmıştır.Hataları tanımlamak, yakalamak ve uygun bir şekilde işlemek.
    }                                // Hata durumunda uygun HTTP durum kodlarını ve hata mesajlarını döndürmek.
    res.status(200).json(otel)
})

const getOtelByCity = asyncHandler(async (req, res) => {  // Middleware Pattern (express-async-handler) kullanılmıştır.
    const {city}=req.body
    if(!city){
        res.status(404)
        throw new Error("Geçersiz şehir")  // Error Handling Pattern kullanılmıştır.
    }
    const otel = await otelDb.find({city})  // Async/Await Pattern kullanılmıştır.
    if(!otel){
        res.status(404)
        throw new Error("Otel not found")  // Error Handling Pattern kullanılmıştır.
    }
    res.status(200).json(otel)
})

module.exports = {
    getAllotels,
    getotel,
    getOtelByCity
}