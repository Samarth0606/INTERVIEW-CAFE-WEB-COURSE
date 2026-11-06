const { fetchProduct, createProduct, upadateProduct, deleteProduct } = require("../controllers/product.controller");


function productRoutes(app){
    app.get('/api/products' , fetchProduct)
    app.post('/api/products' , createProduct)
    app.patch('/api/products/:id' , upadateProduct)
    app.delete('/api/products/:id' , deleteProduct)
}

module.exports = productRoutes;

