const db = require('../config/db');

const Cat = {
  findAll: async () => {
    const [rows] = await db.query(`
      SELECT c.*, cl.name AS clan_name 
      FROM cats c
      LEFT JOIN clans cl ON c.clan_id = cl.id
      ORDER BY c.id DESC
    `);
    return rows;
  },

  findByClanId: async (clan_id) => {
    const [rows] = await db.query(`
      SELECT c.*, cl.name AS clan_name 
      FROM cats c
      LEFT JOIN clans cl ON c.clan_id = cl.id
      WHERE c.clan_id = ?
      ORDER BY c.id DESC
    `, [clan_id]);
    return rows;
  },

  findById: async (id) => {
    const [rows] = await db.query(`
      SELECT c.*, cl.name AS clan_name
      FROM cats c
      LEFT JOIN clans cl ON c.clan_id = cl.id
      WHERE c.id = ?
    `, [id]);
    return rows[0];
  },

  create: async ({ name, age, clan_id }) => {
    if (!name || !age || !clan_id) {
      throw new Error('Faltan campos obligatorios para crear el gato');
    }

    const [result] = await db.query(
      'INSERT INTO cats (name, age, clan_id) VALUES (?, ?, ?)',
      [name, age, clan_id]
    );
    return result.insertId;
  },

  update: async (id, { name, age, clan_id }) => {
    if (!name || !age || !clan_id) {
      throw new Error('Faltan campos obligatorios para actualizar el gato');
    }

    const [result] = await db.query(
      'UPDATE cats SET name = ?, age = ?, clan_id = ? WHERE id = ?',
      [name, age, clan_id, id]
    );
    return result.affectedRows;
  },

  delete: async (id) => {
    const [result] = await db.query('DELETE FROM cats WHERE id = ?', [id]);
    return result.affectedRows;
  }
};

module.exports = Cat;