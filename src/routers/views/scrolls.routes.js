const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/scrolls.Controller');

// LISTADO
router.get('/', async (req, res) => {
    const pergaminos = await ctrl.getAll(req);
    const clanes = await ctrl.getClanes();
    res.render('scrolls/home', {
        title: 'Pergaminos del Clan',
        pergaminos,
        clanes,
        selectedClan: req.query.clan_id
    });
});

// NUEVO
router.get('/nuevo', async (req, res) => {
    const clanes = await ctrl.getClanes();
    res.render('scrolls/form', {
        title: 'Nuevo Pergamino',
        scroll: null,
        clanes
    });
});

// EDITAR
router.get('/editar/:id', async (req, res) => {
    const scroll = await ctrl.getOne(req.params.id);
    if (!scroll) return res.status(404).send('No encontrado');
    const clanes = await ctrl.getClanes();
    res.render('scrolls/form', {
        title: 'Editar Pergamino',
        scroll,
        clanes
    });
});

// CREAR
router.post('/', async (req, res) => {
    await ctrl.create(req.body);
    res.redirect('/pergaminos');
});

// ACTUALIZAR
router.put('/:id', async (req, res) => {
    await ctrl.update(req.params.id, req.body);
    res.redirect('/pergaminos');
});

// ELIMINAR
router.delete('/:id', async (req, res) => {
    await ctrl.remove(req.params.id);
    res.redirect('/pergaminos');
});

module.exports = router;
