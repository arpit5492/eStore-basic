const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/new_product", (req, res) => {
    res.render("new_prod");
});

module.exports = router;