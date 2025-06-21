const db = require('../config/db');

const Cat = {
  findAll: async () => {
    const [rows] = await db.query(`
            SELECT cats.*, clans.name AS clan_name 
            FROM cats 
            LEFT JOIN clans ON cats.clan_id = clans.id
        `);
    return rows;
  },

  findByClanId: async (clan_id) => {
    const [rows] = await db.query(`
            SELECT cats.*, clans.name AS clan_name 
            FROM cats 
            LEFT JOIN clans ON cats.clan_id = clans.id
            WHERE cats.clan_id = ?
        `, [clan_id]);
    return rows;
  },

  findById: async (id) => {
    const [rows] = await db.query(`
      SELECT cats.*, clans.name AS clan_name
      FROM cats
      LEFT JOIN clans ON cats.clan_id = clans.id
      WHERE cats.id = ?
    `, [id]);
    return rows[0];
  },

  create: async ({ name, age, clan_id }) => {
    const [result] = await db.query(
      'INSERT INTO cats (name, age, clan_id) VALUES (?, ?, ?)',
      [name, age, clan_id]
    );
    return result.insertId;
  },

  update: async (id, { name, age, clan_id }) => {
    await db.query(
      'UPDATE cats SET name = ?, age = ?, clan_id = ? WHERE id = ?',
      [name, age, clan_id, id]
    );
  },

  delete: async (id) => {
    await db.query('DELETE FROM cats WHERE id = ?', [id]);
  }
};

module.exports = Cat;