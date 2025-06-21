# 🐱 NULLCATIA – Sistema de Gestión Gatuna

NULLCATIA es un vasto reino digital habitado por miles de gatitos nulos que nacen sin valores predeterminados y deben ser inicializados para encontrar su propósito. Este proyecto representa la modernización de su infraestructura mediante una aplicación web construida con Node.js, Express, MySQL y EJS.

## 🌐 Tecnologías utilizadas

* Node.js + Express
* MySQL (con conexión mediante `mysql2`)
* EJS (vistas servidor)
* AdminLTE (para el diseño de interfaz)
* Tailwind (complementario en estilos)
* Axios (cliente HTTP interno)
* Method-override (para soporte PUT/DELETE vía HTML)

## 📦 Estructura del proyecto

```
Proyecto_NULLCATIA/
├── config/             # Configuración DB
├── controllers/        # Lógica de API REST
├── models/             # Consultas SQL
├── routes/             # Rutas Express
│   ├── gatitos.js
│   └── api/
├── views/              # Vistas EJS
│   ├── partials/
│   └── cats/
├── public/             # CSS, imágenes, JS estático
├── database/
│   └── schema.sql      # Script de creación de base de datos
├── .env.example        # Variables de entorno (sin credenciales)
├── README.md
└── server.js
```

## 🛠️ Instalación

1. Clona el repositorio:

   ```bash
   git clone <repositorio>
   cd Proyecto_NULLCATIA
   ```

2. Instala dependencias:

   ```bash
   npm install
   ```

3. Configura el archivo `.env`:

   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=tu_clave
   DB_NAME=nullcatia
   PORT=3000
   ```

4. Crea la base de datos:

   ```bash
   mysql -u root -p < database/schema.sql
   ```

5. Inicia el servidor:

   ```bash
   npm run dev
   ```

## ✨ Funcionalidades

* ✅ Listado de gatitos con filtro por clan.
* ✅ Registro de nuevos gatitos con selección de clan.
* ✅ Edición y eliminación.
* ✅ Detalle individual de cada gato.
* ✅ Gestión de clanes y territorios en backend (estructura preparada).

## 🔒 Validaciones

* Validación de campos (`name`, `age`, `clan_id`) con Express Validator.
* Manejo de errores con middleware centralizado.
* Rutas REST documentadas y desacopladas.

## 🎮 Video de presentación

[📺 Ver video aquí](https://drive.google.com/...)

El video incluye: introducción narrativa, home visual, registro, filtros y operaciones CRUD completas.

## 🤙️ Créditos

Proyecto desarrollado para la Evaluación 3 de **Programación Web** – IEI-054
Docente: Maximiliano Moraga
Instituto Profesional