const express = require('express');
const router = express.Router();
const axios = require('axios');
const clanModel = require('../../models/Clan');

// LISTAR / FILTRAR
router.get('/', async (req, res) => {
    const clanId = req.query.clan_id || '';
    const apiUrl = clanId
        ? `http://localhost:3000/api/gatitos?clan_id=${clanId}`
        : 'http://localhost:3000/api/gatitos';

    try {
        const [catRes, clans] = await Promise.all([
            axios.get(apiUrl),
            clanModel.findAll()
        ]);

        res.render('cats/home', {
            title: 'Lista de Gatitos',
            cats: catRes.data,
            clans,
            selectedClan: clanId
        });
    } catch (err) {
        console.error('❌ Error al cargar los datos:', err.message);
        res.status(500).send('Error al obtener datos desde la API');
    }
});

// FORMULARIO NUEVO
router.get('/nuevo', async (req, res) => {
    try {
        const clanes = await clanModel.findAll();
        res.render('cats/form', {
            title: 'Registrar Gatito',
            gato: null,
            clanes
        });
    } catch (err) {
        console.error('❌ Error al cargar el formulario de creación:', err.message);
        res.status(500).send('Error al cargar formulario');
    }
});

// CREAR GATITO
router.post('/', async (req, res) => {
    try {
        const { name, age, clan_id } = req.body;
        await axios.post('http://localhost:3000/api/gatitos', {
            name,
            age,
            clan_id
        });
        res.redirect('/gatitos');
    } catch (err) {
        console.error('❌ Error al crear el gatito:', err.message);
        res.status(500).send('No se pudo crear el gatito');
    }
});

// FORMULARIO EDICIÓN
router.get('/:id/editar', async (req, res) => {
    try {
        const id = req.params.id;
        const [gatoRes, clanes] = await Promise.all([
            axios.get(`http://localhost:3000/api/gatitos/${id}`),
            clanModel.findAll()
        ]);

        res.render('cats/form', {
            title: 'Editar Gatito',
            gato: gatoRes.data,
            clanes
        });
    } catch (err) {
        console.error('❌ Error al cargar el formulario de edición:', err.message);
        res.status(500).send('Error al cargar datos del gatito');
    }
});

// ACTUALIZAR GATITO
router.put('/:id', async (req, res) => {
    try {
        const { name, age, clan_id } = req.body;
        await axios.put(`http://localhost:3000/api/gatitos/${req.params.id}`, {
            name,
            age,
            clan_id
        });
        res.redirect('/gatitos');
    } catch (err) {
        console.error('❌ Error al actualizar el gatito:', err.message);
        res.status(500).send('No se pudo actualizar el gatito');
    }
});

// ELIMINAR GATITO
router.delete('/:id', async (req, res) => {
    try {
        await axios.delete(`http://localhost:3000/api/gatitos/${req.params.id}`);
        res.redirect('/gatitos');
    } catch (err) {
        console.error('❌ Error al eliminar el gatito:', err.message);
        res.status(500).send('No se pudo eliminar el gatito');
    }
});

// VER DETALLE
router.get('/:id', async (req, res) => {
    try {
        const response = await axios.get(`http://localhost:3000/api/gatitos/${req.params.id}`);
        const cat = response.data;
        res.render('cats/show', { title: 'Detalle del Gatito', cat });
    } catch (err) {
        console.error('❌ Error al cargar el gatito:', err.message);
        res.status(404).send('Gatito no encontrado');
    }
});

module.exports = router;
