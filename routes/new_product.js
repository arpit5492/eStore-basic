const express = require("express");
const path = require("path");
const router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({extended: true}));

const products = [];

router.get("/new_product", (req, res) => {
    res.render("new_prod");
});

router.post("/new_prod", (req, res) => {
    products.push({title: req.body.title, img: req.body.img});
    console.log(products);
    res.redirect("/");
})

module.exports = {
    router,
    products
};