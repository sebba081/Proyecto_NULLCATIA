const db = require('../config/db');

const Scroll = {
  findAll: async (filters = {}) => {
    let query = `
      SELECT s.*, cl.name AS clan_name
      FROM scrolls s
      JOIN clans cl ON s.clan_id = cl.id
      WHERE 1 = 1
    `;

    const params = [];

    if (filters.title) {
      query += ` AND s.title LIKE ?`;
      params.push(`%${filters.title}%`);
    }

    if (filters.clan_id) {
      query += ` AND s.clan_id = ?`;
      params.push(filters.clan_id);
    }

    const [rows] = await db.query(query, params);
    return rows;
  },

  findById: async (id) => {
    const [rows] = await db.query('SELECT * FROM scrolls WHERE id = ?', [id]);
    return rows[0];
  },

  create: async ({ title, content, clan_id }) => {
    const [result] = await db.query(
      'INSERT INTO scrolls (title, content, clan_id, created_at) VALUES (?, ?, ?, NOW())',
      [title, content, clan_id]
    );
    return result.insertId;
  },

  update: async (id, { title, content, clan_id }) => {
    await db.query(
      'UPDATE scrolls SET title = ?, content = ?, clan_id = ? WHERE id = ?',
      [title, content, clan_id, id]
    );
  },

  delete: async (id) => {
    await db.query('DELETE FROM scrolls WHERE id = ?', [id]);
  }
};

module.exports = Scroll;
