// product service for product page
const ProductModel = require('../models/product.model');


const getAllProducts = async () => {
    try {
        const products = await ProductModel.find();
        return products;
    } catch (error) {
        throw error;
    }
};

const createProduct = async (product) => {
    try {
        const savedProduct = await ProductModel.create(product);
        return savedProduct;
    } catch (error) {
        throw error;
    }
};


module.exports = {
    getAllProducts,
    createProduct
};


