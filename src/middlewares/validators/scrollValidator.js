const { body } = require('express-validator');

const validateScroll = [
    body('title')
        .notEmpty().withMessage('El título es obligatorio'),

    body('content')
        .notEmpty().withMessage('El contenido es obligatorio'),

    body('clan_id')
        .notEmpty().withMessage('Debe asociarse a un gato')
        .isInt().withMessage('El ID del gato debe ser un número')
];

module.exports = validateScroll;
