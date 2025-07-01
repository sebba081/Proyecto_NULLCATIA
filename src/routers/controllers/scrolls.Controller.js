const Scroll = require('../../models/Scroll');
const Clan = require('../../models/Clan');

module.exports = {
  getAll: async (req, res) => {
    const { clan_id } = req.query;
    return await Scroll.findAll({ clan_id });
  },

  getOne: async (id) => {
    return await Scroll.findById(id);
  },

  create: async (data) => {
    return await Scroll.create(data);
  },

  update: async (id, data) => {
    return await Scroll.update(id, data);
  },

  remove: async (id) => {
    return await Scroll.delete(id);
  },

  getClanes: async () => {
    return await Clan.findAll();
  }
};
