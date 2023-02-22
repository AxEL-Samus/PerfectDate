const express = require('express');
const { Type } = require('../db/models');

const typesRouter = express.Router();

typesRouter.get('/')(async (req, res) => {
  try {
    const alltypes = await Type.findAll();
    res.json(alltypes);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = typesRouter;
