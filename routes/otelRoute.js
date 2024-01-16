const express = require("express")
const router = express.Router()
const { getAllotels,getotel,getOtelByCity } = require("../controller/otelController")

router.route("/").get(getAllotels).post(getOtelByCity)
router.route("/:id").get(getotel)

module.exports = router