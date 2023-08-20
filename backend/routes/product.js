const express = require('express');
const { getAllProducts, createProduct, getSingleProduct } = require('../controllers/productController');
const router = express.Router();

router.route('/products').get(getAllProducts).post(createProduct);
router.route('/products/:id').get(getSingleProduct)

module.exports = router;