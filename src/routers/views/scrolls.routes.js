const express = require('express');
const router = express.Router();
const scrollModel = require('../../models/Scroll');
const clanModel = require('../../models/Clan');
const territoryModel = require('../../models/Territory');

router.get('/', async (req, res) => {
    const { clan_id, territory_id } = req.query;

    const pergaminos = await scrollModel.findAll({ clan_id, territory_id });
    const clanes = await clanModel.findAll();
    const territorios = await territoryModel.findAll();

    res.render('scrolls/home', {
        title: 'Pergaminos del Clan',
        pergaminos,
        clanes,
        territorios,
        selectedClan: clan_id,
        selectedTerritory: territory_id
    });
});

// FORMULARIO NUEVO
router.get('/nuevo', async (req, res) => {
    try {
        const clanes = await clanModel.findAll();
        const territorios = await territoryModel.findAll();

        res.render('scrolls/form', {
            title: 'Nuevo Pergamino',
            scroll: null,
            clanes,
            territorios
        });
    } catch (error) {
        console.error('❌ Error al mostrar el formulario:', error.message);
        res.status(500).send('Error al cargar formulario');
    }
});

// CREAR
router.post('/', async (req, res) => {
    try {
        const { titulo, contenido, clan_id, territory_id } = req.body;
        await scrollModel.create({ titulo, contenido, clan_id, territory_id });
        res.redirect('/pergaminos');
    } catch (error) {
        console.error('❌ Error al guardar pergamino:', error.message);
        res.status(500).send('Error al guardar pergamino');
    }
});

module.exports = router;
