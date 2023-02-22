const express = require('express');
const { AttractionDate, Date, Attraction, Type } = require('../db/models');

const dateRouter = express.Router();

dateRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const allDates = await AttractionDate.findAll({
        include: [
          {
            model: Attraction,
            include: {
              model: Type,
            },
          },
          {
            model: Date,
          },
        ],
        order: [['createdAt', 'DESC']],
      });
      res.json(allDates);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  })
  .post(async (req, res) => {
    try {
      const newDate = await Date.create({ ...req.body });
      res.json(newDate);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

dateRouter
  .route('/:id')
  .get(async (req, res) => {
    try {
      const oneDate = await Date.findByPk(req.params.id);
      res.json(oneDate);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  })
  .delete(async (req, res) => {
    try {
      await Date.destroy({ where: { id: req.params.id } });
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

module.exports = dateRouter;
