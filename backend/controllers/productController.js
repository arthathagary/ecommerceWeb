const Product = require('../models/productModel')

const getAllProducts = (req,res,next)=>{
    res.status(200).json({success:true})
}

const createProduct = async (req,res,next)=>{
   const product = await Product.create(req.body)
   res.status(201).json({
    success : true,
    product
   })
}

module.exports = {getAllProducts,createProduct}