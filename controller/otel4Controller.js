const asyncHandler = require("express-async-handler")
const otelDb = require("../models/otel4Model")

const getAllotels = asyncHandler(async (req, res) => {  // Middleware Pattern (express-async-handler) kullanılmıştır. Hataları otomatik olarak global hata işleyiciye yönlendirir. Eğer kullanılmasaydı, her asenkron fonksiyonun içinde try-catch blokları eklememiz gerekecekti.
    const otel = await otelDb.find()  // Async/Await Pattern kullanılmıştır. Kodun daha okunabilir ve yönetilebilir olmasını sağlar. Asenkron operasyonlardan dönen değerleri kolayca yakalayabilmemizi sağlar.
    res.status(200).json(otel)
})


module.exports = {
    getAllotels
}