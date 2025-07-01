const express = require('express');
const router = express.Router();
const axios = require('axios');

// Ruta principal del Reino NULLCATIA
router.get('/', async (req, res) => {
    try {
        res.render('home', {
            title: 'Reino de NULLCATIA'
        });

    } catch (err) {
        console.error('❌ Error al cargar home desde la API REST:', err.message);
        res.status(500).send('Error al obtener datos del Reino.');
    }
});

module.exports = router;
