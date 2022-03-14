// product controller for product page
const { request, response } = require('express');
const { getAllProducts, createProduct } = require('../service/products.service');

const getAll = async (req = request, res = response) => {
    try {
        const products = await getAllProducts();
        res.status(200)
        .json({
            message: 'All products',
            products: products
        });
    } catch (error) {
        res.status(500)
        .json({
            message: 'Error getting products',
            error: error
        });
    }
};

const create = async (req = request.body, res = response) => {
    try {
        const newProduct = await createProduct(req.body);
        res.status(200)
        .json({
            message: 'Product created successfully',
            product: newProduct
        });
    } catch (error) {
        res.status(500)
        .json({
            message: 'Error creating product',
            error: error
        });
    }
};

module.exports = {
    getAll,
    create
};