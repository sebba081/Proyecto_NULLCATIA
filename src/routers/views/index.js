// src/routers/views/index.js
const express = require('express');
const router = express.Router();

// Página de inicio
router.get('/', (req, res) => {
    res.render('home', { title: 'Inicio' });
});

module.exports = router;
