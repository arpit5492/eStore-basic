const express = require("express");
const path = require("path");
const router = express.Router();
const {products} = require("./new_product.js");

router.get("/", (req, res) => {
    res.render("index", {products: products, title: "Store"});
});

module.exports = router;