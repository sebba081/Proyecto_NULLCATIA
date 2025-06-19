const express = require('express');
const router = express.Router();
const { catsController } = require('../controllers');
const validateCat = require('../../middlewares/validators/catValidator');
const handleValidation = require('../../middlewares/validators/handleValidation');

router.get('/', catsController.index);
router.get('/:id', catsController.edit);
router.post('/', validateCat, handleValidation, catsController.create);
router.put('/:id', validateCat, handleValidation, catsController.update);
router.delete('/:id', catsController.destroy);

module.exports = router;