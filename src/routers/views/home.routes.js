const express = require('express');
const router = express.Router();
const axios = require('axios');

// Ruta principal del Reino NULLCATIA
router.get('/', async (req, res) => {
    try {
        // Llama a la API REST para obtener los gatitos
        const response = await axios.get('http://localhost:3000/api/gatitos');
        const cats = response.data;

        res.render('home', {
            title: 'Reino de NULLCATIA',
            cats // se usará en home.ejs
        });

    } catch (err) {
        console.error('❌ Error al cargar home desde la API REST:', err.message);
        res.status(500).send('Error al obtener datos del Reino.');
    }
});

module.exports = router;
