const db = require('../config/db');

const Territory = {
  findAll: async () => {
    const [rows] = await db.query('SELECT * FROM territories');
    return rows;
  },

  findById: async (id) => {
    const [rows] = await db.query('SELECT * FROM territories WHERE id = ?', [id]);
    return rows[0];
  },

  create: async ({ name, description }) => {
    const [result] = await db.query(
      'INSERT INTO territories (name, description) VALUES (?, ?)',
      [name, description]
    );
    return result.insertId;
  },

  update: async (id, { name, description }) => {
    await db.query(
      'UPDATE territories SET name = ?, description = ? WHERE id = ?',
      [name, description, id]
    );
  },

  delete: async (id) => {
    await db.query('DELETE FROM territories WHERE id = ?', [id]);
  }
};

module.exports = Territory;
