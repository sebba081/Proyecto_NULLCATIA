const { body } = require('express-validator');

const validateTerritory = [
    body('name')
        .notEmpty().withMessage('El nombre del territorio es obligatorio'),

    body('description')
        .notEmpty().withMessage('La descripción es obligatoria')
];

module.exports = validateTerritory;

