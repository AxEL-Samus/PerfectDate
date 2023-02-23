const express = require('express');
const { AttractionDate } = require('../db/models');

const attractionDatesRouter = express.Router();

attractionDatesRouter.post('/', async (req, res) => {
    try {
      const newAttractionDate = await AttractionDate.create({}); // <<<<<<tyt dodelat nado

    res.json(newAttractionDate);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = attractionDatesRouter;
