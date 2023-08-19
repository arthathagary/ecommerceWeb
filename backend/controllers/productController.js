const getAllProducts = (req,res,next)=>{
    res.status(200).json({success:true})
}

module.exports = {getAllProducts}