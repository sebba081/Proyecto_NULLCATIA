const Scroll = require('../../models/Scroll');

module.exports = {
  index: async (req, res, next) => {
    try {
      const pergaminos = await Scroll.findAll();
      res.json(pergaminos);
    } catch (err) {
      next(err);
    }
  },

  show: async (req, res, next) => {
    try {
      const scroll = await Scroll.findById(req.params.id);
      if (!scroll) return res.status(404).json({ error: 'Pergamino no encontrado' });
      res.json(scroll);
    } catch (err) {
      next(err);
    }
  },

  create: async (req, res, next) => {
    try {
      const { title, content, cat_id } = req.body;
      const id = await Scroll.create({ title, content, cat_id });
      res.status(201).json({ message: 'Pergamino creado', id });
    } catch (err) {
      next(err);
    }
  },

  update: async (req, res, next) => {
    try {
      const { title, content, cat_id } = req.body;
      await Scroll.update(req.params.id, { title, content, cat_id });
      res.json({ message: 'Pergamino actualizado' });
    } catch (err) {
      next(err);
    }
  },

  destroy: async (req, res, next) => {
    try {
      await Scroll.delete(req.params.id);
      res.json({ message: 'Pergamino eliminado' });
    } catch (err) {
      next(err);
    }
  }
};
