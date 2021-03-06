const mongoose = require('mongoose');

// product model for product page
const ProductsSchema = mongoose.model('Product', {
    name: String,
    price: Number,
    image: String,
    description: String,
});

module.exports = ProductsSchema;