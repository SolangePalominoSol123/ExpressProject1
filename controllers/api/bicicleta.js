var Bicicleta=require('../../models/bicicleta');

exports.bicicletas_list = function(req,res){
    res.status(200).json({
        bicicletas: Bicicleta.allBicis
    });
}

exports.bicicletas_create_post = function(req, res){
    var bici =new Bicicleta(req.body.id, req.body.color, req.body.modelo);
    bici.ubicacion=[req.body.lat,req.body.lng];
    Bicicleta.add(bici);
    res.status(200).json({
        bicicleta: bici
    })
}

exports.bicicletas_update_post = function(req, res){
    var bici=Bicicleta.findById(req.params.id);
    bici.id=req.body.id;
    bici.color=req.body.color;
    bici.modelo=req.body.modelo;
    bici.ubicacion=[req.body.lat,req.body.lng];

    res.status(200).json({
        bicicleta: bici
    })
}

exports.bicicletas_delete_post =function(req, res){
    Bicicleta.removeById(req.body.id);
    res.status(204).send();
}