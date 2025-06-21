const express = require('express');
const router = express.Router();

const homeRoutes = require('./home.routes');
const catsRoutes = require('./cats.routes');
const clanesRoutes = require('./clanes.routes');

// Home general
router.use('/', homeRoutes);

// Vistas específicas de gatitos
router.use('/gatitos', catsRoutes);

// Vistas de clanes
router.use('/clanes', clanesRoutes);

module.exports = router;
