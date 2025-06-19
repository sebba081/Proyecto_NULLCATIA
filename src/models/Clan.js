const db = require('../config/db');

const Clan = {
  findAll: async () => {
    const [rows] = await db.query(`
      SELECT clans.*, territories.name AS territory_name
      FROM clans
      LEFT JOIN territories ON clans.territory_id = territories.id
    `);
    return rows;
  },

  findById: async (id) => {
    const [rows] = await db.query('SELECT * FROM clans WHERE id = ?', [id]);
    return rows[0];
  },

  create: async ({ name, territory_id }) => {
    const [result] = await db.query(
      'INSERT INTO clans (name, territory_id) VALUES (?, ?)',
      [name, territory_id]
    );
    return result.insertId;
  },

  update: async (id, { name, territory_id }) => {
    await db.query(
      'UPDATE clans SET name = ?, territory_id = ? WHERE id = ?',
      [name, territory_id, id]
    );
  },

  delete: async (id) => {
    await db.query('DELETE FROM clans WHERE id = ?', [id]);
  }
};

module.exports = Clan;
