const express = require('express');
const router = express.Router();
const { scrollsController } = require('../controllers');
const validateScroll = require('../../middlewares/validators/scrollValidator');
const handleValidation = require('../../middlewares/validators/handleValidation');

router.get('/', scrollsController.index);
router.get('/:id', scrollsController.show);
router.post('/', validateScroll, handleValidation, scrollsController.create);
router.put('/:id', validateScroll, handleValidation, scrollsController.update);;
router.delete('/:id', scrollsController.destroy);

module.exports = router;
