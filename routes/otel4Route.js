const express = require("express")
const router = express.Router()
const { getAllotels} = require("../controller/otel4Controller")

router.route("/").get(getAllotels)

module.exports = router