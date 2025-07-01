const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/cats.Controller');

// Get all cats
router.get('/', async (req, res) => {
    const data = await ctrl.getAll(req);
    res.json(data);
});

// Get one cat
router.get('/:id', async (req, res) => {
    const item = await ctrl.getOne(req.params.id);
    if (!item) return res.status(404).json({ error: 'No encontrado' });
    res.json(item);
});

// Create a new cat
router.post('/', async (req, res) => {
    const id = await ctrl.create(req.body);
    res.status(201).json({ message: 'Creado', id });
});

// Update an existing cat
router.put('/:id', async (req, res) => {
    await ctrl.update(req.params.id, req.body);
    res.json({ message: 'Actualizado' });
});

// Delete a cat
router.delete('/:id', async (req, res) => {
    await ctrl.remove(req.params.id);
    res.json({ message: 'Eliminado' });
});

module.exports = router;