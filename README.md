# 🐾 NULLCATIA - Backend API REST

NULLCATIA es un reino digital poblado por gatos nulos que buscan propósito. Esta API backend en Node.js + Express les permite ser inicializados, organizados en clanes, custodiar territorios y redactar antiguos pergaminos.

---

## 📦 Tecnologías

- Node.js
- Express
- MySQL (usando mysql2)
- Jest + Supertest (tests)
- dotenv
- express-validator
- Estructura modular con rutas, controladores y modelos

---

## 📁 Estructura

```
src/
├── models/
├── routers/
│   ├── api/
│   └── controllers/
├── config/
├── index.js
database/
├── schema.sql
├── seeds.sql
```

---

## ✅ Requisitos

- Node.js ≥ 16
- MySQL Server activo
- Git (opcional)

---

## ⚙️ Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/nullcatia.git
cd nullcatia
```

2. Instala dependencias:

```bash
npm install
```

3. Copia el archivo `.env.example` como `.env` y configúralo:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=tu_clave
DB_NAME=nullcatia_db
PORT=3000
```

4. Crea la base de datos:

```bash
mysql -u root -p < database/schema.sql
mysql -u root -p nullcatia_db < database/seeds.sql
```

---

## 🚀 Ejecutar el servidor

```bash
npm run dev
```

Servidor en: `http://localhost:3000/api`

---

## 📬 Endpoints principales

| Método | Ruta                   | Descripción             |
|--------|------------------------|-------------------------|
| GET    | /api/gatitos           | Listar gatos            |
| POST   | /api/clanes            | Crear clan              |
| PUT    | /api/pergaminos/:id    | Actualizar pergamino    |
| DELETE | /api/territorios/:id   | Eliminar territorio     |

---

## 🧪 Ejecutar pruebas (Jest + Supertest)

```bash
npm test
```

Esto realiza pruebas de integración reales contra tu base de datos.

---

## 💡 Buenas prácticas

- Usa `.env` para proteger credenciales.
- Aísla la base de datos de test (usa `nullcatia_test`).
- Usa `express-validator` para validar entradas de usuario.
- Documenta tus endpoints con Swagger (recomendado).

---

## 👤 Autor

Sebastián Solís  
Proyecto académico para la asignatura **Programación Web (IEI-054)**  
Docente: Maximiliano Moraga
