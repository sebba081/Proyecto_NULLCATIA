const express = require('express');
const router = express.Router();
const { clansController } = require('../controllers');
const validateClan = require('../../middlewares/validators/clanValidator');
const handleValidation = require('../../middlewares/validators/handleValidation');

router.get('/', clansController.index);
router.get('/:id', clansController.show);
router.post('/', validateClan, handleValidation, clansController.create);
router.put('/:id', validateClan, handleValidation, clansController.update);
router.delete('/:id', clansController.destroy);

module.exports = router;
