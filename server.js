const express = require('express')
const connectDb = require('./config/dbConnection')
const app = express()
const path = require("path");
const cors = require('cors');

// Middleware Pattern: express.json() ve cors() middleware'lerini kullanma
app.use(express.json()) // Middleware, gelen istekleri işleyen ve ardından bir sonraki middleware'e veya yönlendirme işlevine geçen ara yazılımlardır.
app.use(cors()); // İşlevselliği genelleştirir, kodun daha temiz ve yönetilebilir olmasını sağlar.

// Middleware Pattern: Static dosyaları sunmak için express.static middleware'ini kullanma
app.use("/libs", express.static(path.join(__dirname, "node_modules"))) // Eğer middleware'ler kullanılmasaydı, gelen istekleri işlemek, isteği zenginleştirmek veya yanıtı özelleştirmek için her defasında aynı kodu yazmamız gerekirdi.
app.use("/views", express.static(path.join(__dirname, "views"))) // Bu durum, kodumuzun tekrarlanabilirliğini düşürebilir ve bakımını zorlaştırabilir.

const anasayfaRoute = require("./routes/anasayfaRoute")
const muzeRoute = require("./routes/muzeRoute")
const otelRoute = require("./routes/otelRoute")
const otel4Route = require("./routes/otel4Route")

// Routing Pattern: Belirli rotalara yönlendirilen istekleri işlemek için routing tanımlama (daha okunabilir)
app.use("/", anasayfaRoute); // Routing Pattern kullanmak, uygulamanın farklı özellikleri arasında kodu modüler bir şekilde organize etmek ve yönlendirmek için önemlidir.
app.use("/muze", muzeRoute); // Eğer rota tanımlamaları yapılmamış olsaydı, tüm işlevselliği tek bir dosya veya belirli bir modül içinde yönetmek zorunda kalırdık.
app.use("/otel", otelRoute); // Bu da kodumuzun karmaşık ve bakımı zor bir yapıya sahip olmasına neden olabilirdi.
app.use("/otel4", otel4Route);

app.listen(3000, () => {
    console.log("Listening on port 3000 ")
})

// Singleton Pattern (Bağlantı Oluşturma): Tek bir veritabanı bağlantısı paylaşma ve tekrar tekrar oluşturulmama
connectDb()    // Tek bir yerden veritabanı bağlantısının oluşturulmasını ve paylaşılmasını sağlar.
              // Her defasında bağlantı oluşturulması yerine, bir kere oluşturulan bağlantının kullanılması kaynak tüketimini azaltabilir.