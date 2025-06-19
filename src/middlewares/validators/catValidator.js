const { body } = require('express-validator');

const validateCat = [
    body('name')
        .notEmpty().withMessage('El nombre es obligatorio')
        .isLength({ min: 2 }).withMessage('El nombre debe tener al menos 2 caracteres'),

    body('age')
        .notEmpty().withMessage('La edad es obligatoria')
        .isInt({ min: 0 }).withMessage('La edad debe ser un número positivo'),

    body('clan_id')
        .notEmpty().withMessage('Debe pertenecer a un clan')
        .isInt().withMessage('El clan debe ser un ID numérico')
];

module.exports = validateCat;
