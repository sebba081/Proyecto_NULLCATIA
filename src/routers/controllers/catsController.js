const Cat = require('../../models/Cat');

module.exports = {
  index: async (req, res, next) => {
    try {
      const { clan_id } = req.query;

      const gatos = clan_id
        ? await Cat.findByClanId(clan_id)
        : await Cat.findAll();

      res.json(gatos);
    } catch (err) {
      next(err);
    }
  },

  create: async (req, res, next) => {
    try {
      const { name, age, clan_id } = req.body;
      const id = await Cat.create({ name, age, clan_id });
      res.status(201).json({ message: 'Gato creado', id });
    } catch (err) {
      next(err);
    }
  },

  edit: async (req, res, next) => {
    try {
      const gato = await Cat.findById(req.params.id);
      if (!gato) return res.status(404).json({ error: 'Gato no encontrado' });
      res.json(gato);
    } catch (err) {
      next(err);
    }
  },

  update: async (req, res, next) => {
    try {
      const { name, age, clan_id } = req.body;
      await Cat.update(req.params.id, { name, age, clan_id });
      res.json({ message: 'Gato actualizado' });
    } catch (err) {
      next(err);
    }
  },

  destroy: async (req, res, next) => {
    try {
      await Cat.delete(req.params.id);
      res.json({ message: 'Gato eliminado' });
    } catch (err) {
      next(err);
    }
  }
};
