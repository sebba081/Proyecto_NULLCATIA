# 🐾 Base de Datos del Reino de NULLCATIA

Bienvenido a la documentación oficial del esquema de base de datos del proyecto **NULLCATIA**. Aquí encontrarás instrucciones claras para importar y verificar la base de datos que da vida al reino digital de los gatos programadores.

---

## 📁 Archivos disponibles

* `schema.sql`: Contiene la definición completa de las tablas:

  * `cats`
  * `clans`
  * `territories`
  * `scrolls`
    Todas incluyen claves primarias, foráneas y tipos de datos apropiados.

---

## ⚙️ Requisitos

* **Sistema gestor de base de datos**: MySQL (recomendado) o MariaDB
* **Herramientas sugeridas**: MySQL Workbench, DBeaver, consola MySQL

---

## 🚀 Pasos para importar la base de datos

### 1. Crear la base de datos

```sql
CREATE DATABASE nullcatia_db;
```

### 2. Usar la base de datos

```sql
USE nullcatia_db;
```

### 3. Importar el script `schema.sql`

#### Opción A: Desde MySQL Workbench

* Abrir `schema.sql`
* Seleccionar la base de datos `nullcatia_db`
* Ejecutar todo el script (Ctrl + Shift + Enter)

#### Opción B: Desde la terminal o consola

```bash
mysql -u TU_USUARIO -p nullcatia_db < ruta/a/schema.sql
```

---

## ✅ Verificación posterior

Después de ejecutar el script, deberías ver estas tablas:

* `cats` → contiene gatos registrados y su clan
* `clans` → agrupa gatos según su territorio
* `territories` → zonas del reino
* `scrolls` → pergaminos ligados a gatos

Puedes usar este comando para confirmar:

```sql
SHOW TABLES;
```

---

## 💡 Sugerencias adicionales

* Puedes agregar un archivo `seeds.sql` para insertar datos de prueba.
* Verifica que tu archivo `.env` esté correctamente configurado para conectarse a `nullcatia_db`.
* Considera hacer respaldos periódicos si vas a trabajar con datos reales o sensibles.

---

## 👨‍💻 Autoría

Desarrollado como parte del proyecto de programación web NULLCATIA.
