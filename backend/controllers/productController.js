const Product = require('../models/productModel')
const ErrorHandler = require('../utils/errorHandler')

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
       return next(new ErrorHandler('Product Not Found',404)) 
    }
    res.status(201).json({
        success : true,
        product
    })
}

const updateProduct = async (req,res,next) =>{
    let product = await Product.findById(req.params.id);
    if(!product){
        return res.status(404).json({
            success:false,
            message:"Product Not Found"
        })
    }
    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        runValidators:true,
        new:true
    })
    res.status(201).json({
        success:true,
        product
    })
}

const deleteProduct = async (req,res,next)=>{
    const product = await Product.findById(req.params.id);
    if(!product){
        return res.status(404).json({
            success:false,
            message:"Product Not Found"
        })
    }
    await product.deleteOne();

    res.status(200).json({
        success : true,
        message : "Product Deleted"
    })
}

module.exports = {getAllProducts,createProduct,getSingleProduct,updateProduct,deleteProduct}