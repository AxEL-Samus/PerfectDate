const express = require('express');
const { Types } = require('../db/models');

const typesRouter = express.Router();

typesRouter.get('/', async (req, res) => {
  try {
    const alltypes = await Types.findAll();
    console.log('00000000', alltypes);
    res.json(alltypes);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = typesRouter;
