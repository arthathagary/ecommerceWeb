const express = require('express');
const { getAllProducts, createProduct, getSingleProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const router = express.Router();

router.route('/products').get(getAllProducts).post(createProduct);
router.route('/products/:id').get(getSingleProduct).put(updateProduct).delete(deleteProduct)

module.exports = router;