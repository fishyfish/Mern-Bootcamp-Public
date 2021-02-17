const { response } = require('express');
const Product = require('../models/product.model');    /* this is new */
module.exports.index = (request, response) => {
    response.json({
        message: "My Foot Hurts"
    });
}
          /* The method below is new */
module.exports.createProduct = (request, response) => {
    const { title, price,description } = request.body;
    Product.create({
        title,
        price,
        description,
    })
        .then(product => response.json(product))
        .catch(err => response.json(err));
}

module.exports.getAllProducts = (request, response) => {
    Product.find({})
    .then (AllProducts => response.json(AllProducts))
    .catch(err => response.json(err));
}