const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT || 4000; //ถ้า 3000 ใช้ไม่ได้จะใช้ 4000
const path = require('path');
const productRouter = express.Router();
const products = require("./data/products.json");

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));

app.set("views","./src/views");
app.set("view engine", "ejs");

app.use("/products", productRouter);
productRouter.route("/").get((req,res)=>{
    res.render("Products",
        products,
    );
})

app.get("/", (req, res) => {
    res.render('index', {username: 'M', customers: ["A","B","C"]});
});

app.listen(PORT, () => {
    debug("Listening on port " + chalk.green(PORT));
});