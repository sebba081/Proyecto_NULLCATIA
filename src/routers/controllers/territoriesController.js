const Territory = require('../../models/Territory');

module.exports = {
  index: async (req, res, next) => {
    try {
      const territorios = await Territory.findAll();
      res.json(territorios);
    } catch (err) {
      next(err);
    }
  },

  show: async (req, res, next) => {
    try {
      const territorio = await Territory.findById(req.params.id);
      if (!territorio) return res.status(404).json({ error: 'Territorio no encontrado' });
      res.json(territorio);
    } catch (err) {
      next(err);
    }
  },

  create: async (req, res, next) => {
    try {
      const { name, description } = req.body;
      const id = await Territory.create({ name, description });
      res.status(201).json({ message: 'Territorio creado', id });
    } catch (err) {
      next(err);
    }
  },

  update: async (req, res, next) => {
    try {
      const { name, description } = req.body;
      await Territory.update(req.params.id, { name, description });
      res.json({ message: 'Territorio actualizado' });
    } catch (err) {
      next(err);
    }
  },

  destroy: async (req, res, next) => {
    try {
      await Territory.delete(req.params.id);
      res.json({ message: 'Territorio eliminado' });
    } catch (err) {
      next(err);
    }
  }
};
