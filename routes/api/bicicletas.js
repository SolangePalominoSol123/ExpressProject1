var express = require('express');
var router = express.Router();

var bicicleta_controllerAPI = require ('../../controllers/api/bicicleta');

router.get('/', bicicleta_controllerAPI.bicicletas_list);
router.post('/create', bicicleta_controllerAPI.bicicletas_create_post);
router.post('/:id/update', bicicleta_controllerAPI.bicicletas_update_post);
router.delete('/delete', bicicleta_controllerAPI.bicicletas_delete_post);

module.exports=router;