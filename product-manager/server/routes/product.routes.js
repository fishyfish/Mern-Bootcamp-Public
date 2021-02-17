const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.get('/api', ProductController.index);
    app.post('/api/products', ProductController.createProduct);     /* This is new */
    app.get('/api/products', ProductController.getAllProducts);
    app.get('/api/products', ProductController.getOneProduct);
    app.delete('/api/products', ProductController.deleteProduct);
    app.put('/api/products', ProductController.putProduct);
}
