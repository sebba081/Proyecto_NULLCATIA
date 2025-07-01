const Clan = require('../../models/Clan');

module.exports = {
  index: async (req, res, next) => {
    try {
      const clanes = await Clan.findAll();
      res.json(clanes);
    } catch (err) {
      next(err);
    }
  },

  show: async (req, res, next) => {
    try {
      const clan = await Clan.findById(req.params.id);
      if (!clan) return res.status(404).json({ error: 'Clan no encontrado' });
      res.json(clan);
    } catch (err) {
      next(err);
    }
  },

  create: async (req, res, next) => {
    try {
      const { name, territory_id } = req.body;
      const id = await Clan.create({ name, territory_id });
      res.status(201).json({ message: 'Clan creado', id });
    } catch (err) {
      next(err);
    }
  },

  update: async (req, res, next) => {
    try {
      const { name, territory_id } = req.body;
      await Clan.update(req.params.id, { name, territory_id });
      res.json({ message: 'Clan actualizado' });
    } catch (err) {
      next(err);
    }
  },

  destroy: async (req, res, next) => {
    try {
      await Clan.delete(req.params.id);
      res.json({ message: 'Clan eliminado' });
    } catch (err) {
      next(err);
    }
  }
};
