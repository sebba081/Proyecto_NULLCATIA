const Cat = require('../../models/Cat');
const Clan = require('../../models/Clan');

module.exports = {
  getAll: async (req) => {
    const { clan_id } = req.query;

    if (clan_id && !isNaN(parseInt(clan_id))) {
      return await Cat.findByClanId(clan_id);
    }

    return await Cat.findAll();
  },

  getOne: async (id) => {
    return await Cat.findById(id);
  },

  create: async (data) => {
    return await Cat.create(data);
  },

  update: async (id, data) => {
    return await Cat.update(id, data);
  },

  remove: async (id) => {
    return await Cat.delete(id);
  },

  getClanes: async () => {
    return await Clan.findAll();
  }
};