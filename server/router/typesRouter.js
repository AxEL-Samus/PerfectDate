const express = require('express');
const { Attraction, Type } = require('../db/models');

const typesRouter = express.Router();

typesRouter.route('/')(async (req, res) => {
  try {
    const { typeId } = req.params;
    const alltypes = await Type.findAll({
      where: { typeId },
      include: {
        model: Attraction,
      },
    });
    res.json(alltypes);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = typesRouter;
