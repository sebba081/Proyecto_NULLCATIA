const express = require('express');
const router = express.Router();
const clanModel = require('../../models/Clan');

router.get('/', async (req, res) => {
    try {
        const clans = await clanModel.findAll(); // Esto debe traer name, territory_name y history
        res.render('clanes/home', {
            title: 'Clanes del Reino',
            clans
        });
    } catch (err) {
        console.error('❌ Error al obtener clanes:', err.message);
        res.status(500).send('Error al cargar clanes');
    }
});

module.exports = router;
