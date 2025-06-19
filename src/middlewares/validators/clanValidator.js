const { body } = require('express-validator');

const validateClan = [
    body('name')
        .notEmpty().withMessage('El nombre del clan es obligatorio'),

    body('territory_id')
        .notEmpty().withMessage('Debe asociarse a un territorio')
        .isInt().withMessage('El ID del territorio debe ser un número')
];

module.exports = validateClan;