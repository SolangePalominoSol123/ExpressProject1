var Product = require('../models/product');

exports.getListProducts=function(req,res){
    res.render('products/index', {products:Product.productos_lista});
}

exports.products_crear_get=function(req,res){
    res.render('products/create');
}

exports.products_crear_post=function(req,res){
    var newId=Product.getNewId();
    var prod=new Product(newId, req.body.nombre, req.body.precio, req.body.localId, req.body.cantidad);
    Product.add(prod);
    res.redirect('/productos');
}

exports.products_actualizar_get=function(req,res){
    var product=Product.getById(req.params.id);
    res.render('products/update', {product})
}

exports.products_actualizar_post=function(req,res){
    if(req.params.id!=undefined && req.params.id!=''){
        var prod=new Product(req.params.id, req.body.nombre, req.body.precio, req.body.localId, req.body.cantidad);
        Product.update(prod);
    }
    res.redirect('/productos');
}

exports.products_eliminar_post=function(req,res){
    if(req.params.id!=undefined && req.params.id!=''){
        Product.removeById(req.params.id);
    }
    res.redirect('/productos');
}