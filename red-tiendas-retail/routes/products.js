var express = require('express');
var router = express.Router();

var productController = require('../controllers/product');

router.get('/', productController.getListProducts);
router.get('/crear', productController.products_crear_get);
router.post('/crear', productController.products_crear_post);
router.get('/actualizar/:id', productController.products_actualizar_get);
router.post('/actualizar/:id', productController.products_actualizar_post);
router.post('/eliminar/:id', productController.products_eliminar_post);

module.exports=router;