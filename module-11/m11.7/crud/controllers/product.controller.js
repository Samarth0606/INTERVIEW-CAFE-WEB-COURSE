const ProductModel = require("../models/Product.model");

async function fetchProduct(req,res){
    try{
        let allProducts = await ProductModel.find();
        return res.status(200).json(allProducts);
    }
    catch(err){
        return res.status(404).json({msg: "Something wrong with DB"});
    }
}

async function createProduct(req,res){
    try{
        let {name,price,email,description} = req.body;
        let newProduct = await ProductModel.create({name,price,email,description});
        return res.status(201).json(newProduct)
    }
    catch(err){
        return res.status(404).json({msg: "Something wrong while creating product"});
    }
}
async function upadateProduct(req,res){
    try{
        let {id} = req.params;
        let {name,price,email,description} = req.body;
        let updatedProduct = await ProductModel.findByIdAndUpdate(id , {name,price,email,description} , {new:true}) 
        return res.status(204).json(updatedProduct)
    }
    catch(err){
        return res.status(404).json({msg: "Something wrong while updating product"});
    }
}
async function deleteProduct(req,res){
    try{
        let {id} = req.params;
        let deletedProduct = await ProductModel.findByIdAndDelete(id) 
        return res.status(200).json(deletedProduct)
    }
    catch(err){
        return res.status(404).json({msg: "Something wrong while deleting product"});
    }
}


module.exports = {fetchProduct,createProduct,upadateProduct,deleteProduct}
