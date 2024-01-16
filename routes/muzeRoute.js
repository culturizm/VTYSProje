const express = require("express")
const router = express.Router()
const { getAllmuzeler,getmuzeByCity } = require("../controller/muzeController")

router.route("/").get(getAllmuzeler).post(getmuzeByCity)


module.exports = router