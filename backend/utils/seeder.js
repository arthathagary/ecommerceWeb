const products = require('../data/products.json')
const Product = require('../models/productModel')
const dotenv = require('dotenv')
const connectDB = require('../config/database')

dotenv.config({path:'backend/config/config.env'})



const seedProducts = async ()=>{
    try {
        await connectDB();
        await Product.deleteMany();
        console.log("Products Deleted");
        await Product.insertMany(products);
        console.log("Product Added");
    } catch (error) {
        console.log(error.message);
    }
    process.exit();
}
seedProducts();