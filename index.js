const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const morgan = require("morgan");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const store = require("./routes/store.js");
const new_prod = require("./routes/new_product.js");

dotenv.config();

const PORT = process.env.PORT;

app.use(morgan("dev"));
app.use(express.static(__dirname));
app.use(store);
app.use(new_prod);

app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
});