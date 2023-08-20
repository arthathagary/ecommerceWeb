const Product = require('../models/productModel')

const getAllProducts =async (req,res,next)=>{
    const products = await Product.find({});
    res.status(200).json({
        success:true,
        count : products.length,
        products
    })
}

const createProduct = async (req,res,next)=>{
   const product = await Product.create(req.body)
   res.status(201).json({
    success : true,
    product
   })
}

const getSingleProduct = async (req,res,next)=>{
    const product = await Product.findById(req.params.id);
    if(!product){
        return res.status(404).json({
            success:false,
            message:"Product Not Found"
        })
    }
    res.status(201).json({
        success : true,
        product
    })
}

module.exports = {getAllProducts,createProduct,getSingleProduct}