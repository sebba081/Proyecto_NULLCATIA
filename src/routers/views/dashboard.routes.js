const express = require('express');
const router = express.Router();

// Ruta para el panel principal
router.get('/dashboard', (req, res) => {
    res.render('dashboard', {
        title: 'Dashboard | NULLCATIA',
        pageTitle: 'Panel Principal',
        user: { name: 'Gato Maestro' },
    });
});

module.exports = router;
