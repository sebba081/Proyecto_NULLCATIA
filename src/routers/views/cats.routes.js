const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/cats.Controller');

// Mostrar todos los gatos con filtro opcional
router.get('/', async (req, res) => {
    const cats = await ctrl.getAll(req);
    const clanes = await ctrl.getClanes();
    res.render('cats/home', {
        title: 'Gatos del Clan',
        cats,
        clanes,
        selectedClan: req.query.clan_id
    });
});

// Formulario para crear un nuevo gato
router.get('/nuevo', async (req, res) => {
    const clanes = await ctrl.getClanes();
    res.render('cats/form', {
        title: 'Nuevo Gato',
        cat: null,
        clanes
    });
});

// Formulario para editar un gato existente
router.get('/editar/:id', async (req, res) => {
    const cat = await ctrl.getOne(req.params.id);
    if (!cat) return res.status(404).send('No encontrado');
    const clanes = await ctrl.getClanes();
    res.render('cats/form', {
        title: 'Editar Gato',
        cat,
        clanes
    });
});

// Crear un nuevo gato
router.post('/', async (req, res) => {
    await ctrl.create(req.body);
    res.redirect('/gatos');
});

// Actualizar un gato existente
router.put('/:id', async (req, res) => {
    await ctrl.update(req.params.id, req.body);
    res.redirect('/gatos');
});

// Eliminar un gato
router.delete('/:id', async (req, res) => {
    await ctrl.remove(req.params.id);
    res.redirect('/gatos');
});

// Mostrar detalle de un gato
router.get('/:id', async (req, res) => {
    const cat = await ctrl.getOne(req.params.id);
    if (!cat) return res.status(404).send('No encontrado');
    res.render('cats/detail', {
        title: 'Detalle del Gato',
        cat
    });
});

module.exports = router;
