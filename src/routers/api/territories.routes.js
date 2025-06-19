const express = require('express');
const router = express.Router();
const { territoriesController } = require('../controllers');
const validateTerritory = require('../../middlewares/validators/territoryValidator');
const handleValidation = require('../../middlewares/validators/handleValidation');

router.get('/', territoriesController.index);
router.get('/:id', territoriesController.show);
router.post('/', validateTerritory, handleValidation, territoriesController.create);
router.put('/:id', validateTerritory, handleValidation, territoriesController.update);
router.delete('/:id', territoriesController.destroy);

module.exports = router;
