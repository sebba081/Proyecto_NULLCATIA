const express = require('express');
const router = express.Router();

const catRoutes = require('./cat.routes');
const clansRoutes = require('./clans.routes');
const territoriesRoutes = require('./territories.routes');
const scrollsRoutes = require('./scrolls.routes');

router.use('/gatos', catRoutes);
router.use('/clanes', clansRoutes);
router.use('/territorios', territoriesRoutes);
router.use('/pergaminos', scrollsRoutes);

// Prueba
router.get('/', (req, res) => res.json({ message: 'API NULLCATIA activa 🐾' }));

module.exports = router;
