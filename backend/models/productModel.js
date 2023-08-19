const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name : {
            type:String,
            required :[true,"Please Enter Product Name!"],
            trim:true,
            maxlenght : [100,"Product name cannot exceed 100 charactors"]
        },
        price : {
            type : Number,
            default:0.0
        },
        description : {
            type : String,
            required : [true,"Please provide description"]
        },
        ratings:{
            type : String,
            default : 0
        },
        images : [
            {
                image : {
                    type : String,
                    required : true
                }
            }
        ],
        category :{
            type:String,
            required : [true,"Please Enter Product Category"],
            enum : {
                values:[
                    'Electonics',
                    'Cloths',
                    'Sports'
                ],
                message : "Please select correct category"
            }
        },
        seller : {
            type : String,
            required : [true,"Please enter seller details"]
        },
        stock : {
            type : Number,
            required : [true,"Please enter product stock"],
            maxlenght : [20,"Product stock cannot exceed 20"]
        },
        numOfReviews : {
            type : Number,
            default : 0
        },
        reviews : [
            {
                name : {
                    type : String,
                    required : true
                },
                ratings : {
                    type :String,
                    required : true
                },
                comment:{
                    type : String,
                    required: true
                }
            }
        ],
        createdAt :{
            type : Date,
            default : Date.now()
        }
    }
)

let schema = mongoose.model('Product',productSchema)

module.exports = schema;