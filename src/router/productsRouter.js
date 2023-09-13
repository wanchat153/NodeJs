const express = require('express');
const productsRouter = express.Router();
const products = require("../data/products.json");

productsRouter.route("/").get((req,res)=>{
    res.render("Products",{
        products,
    })
});

productsRouter.route("/:id").get((req,res)=>{
    const id = req.params.id;
    res.render("Product",{
        product: products[id],
    })
});

module.exports = productsRouter;