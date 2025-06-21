const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const expressLayouts = require('express-ejs-layouts');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, '..', 'public')));

// Motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layout');

// Rutas
const viewRoutes = require('./routers/views/index');
app.use('/', viewRoutes);
const apiRoutes = require('./routers/api');
app.use('/api', apiRoutes);


app.listen(PORT, () => {
  console.log(`✅ Servidor NULLCATIA activo en http://localhost:${PORT}/`);
});
