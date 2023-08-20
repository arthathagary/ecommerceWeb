const express = require('express');
const { getAllProducts, createProduct, getSingleProduct, updateProduct } = require('../controllers/productController');
const router = express.Router();

router.route('/products').get(getAllProducts).post(createProduct);
router.route('/products/:id').get(getSingleProduct).put(updateProduct)

module.exports = router;