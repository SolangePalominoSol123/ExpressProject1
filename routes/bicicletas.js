var express=require('express');
var router=express.Router();

var bicicletaController = require('../controllers/bicicleta');

router.get('/', bicicletaController.bicicletas_list);
router.get('/create', bicicletaController.bicicletas_create_get);
router.post('/create', bicicletaController.bicicletas_create_post);
router.post('/:id/delete', bicicletaController.bicicletas_delete_post);
router.get('/:id/update', bicicletaController.bicicletas_update_get);
router.post('/:id/update', bicicletaController.bicicletas_update_post);

module.exports = router;