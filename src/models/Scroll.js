const db = require('../config/db');

const Scroll = {
  findAll: async () => {
    const [rows] = await db.query(`
      SELECT scrolls.*, cats.name AS cat_name
      FROM scrolls
      LEFT JOIN cats ON scrolls.cat_id = cats.id
    `);
    return rows;
  },

  findById: async (id) => {
    const [rows] = await db.query('SELECT * FROM scrolls WHERE id = ?', [id]);
    return rows[0];
  },

  create: async ({ title, content, cat_id }) => {
    const [result] = await db.query(
      'INSERT INTO scrolls (title, content, cat_id, created_at) VALUES (?, ?, ?, NOW())',
      [title, content, cat_id]
    );
    return result.insertId;
  },

  update: async (id, { title, content, cat_id }) => {
    await db.query(
      'UPDATE scrolls SET title = ?, content = ?, cat_id = ? WHERE id = ?',
      [title, content, cat_id, id]
    );
  },

  delete: async (id) => {
    await db.query('DELETE FROM scrolls WHERE id = ?', [id]);
  }
};

module.exports = Scroll;
