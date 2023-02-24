const express = require('express');
const { AttractionDate, Date, Attraction, Type } = require('../db/models');

const attractionDatesRouter = express.Router();

// attractionDatesRouter.get('/', async (req, res) => {
//   try {
//     const allDates = await Date.findAll({
//       include: {
//         model: Attraction,
//         include: {
//           model: Type,
//         },
//       },
//       order: [['createdAt', 'ASC']],
//     });
//     res.json(allDates);
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(500);
//   }
// });

attractionDatesRouter.get('/', async (req, res) => {
  try {
    const newDateWithAttractions = await Date.findOne({
      where: { id: 4 },
      include: {
        model: Attraction,
        include: {
          model: Type,
        },
      },
    });
    res.json(newDateWithAttractions);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'wtf??!' });
  }
});

attractionDatesRouter.post('/', async (req, res) => {
  try {
    const { id1, id2, id3 } = req.body;
    console.log(req.body);
    const newDate = await Date.create();
    await AttractionDate.bulkCreate([
      {
        attractionId: id1,
        dateId: newDate.id,
      },
      {
        attractionId: id2,
        dateId: newDate.id,
      },
      {
        attractionId: id3,
        dateId: newDate.id,
      },
    ]);
    const newDateWithAttractions = await Date.findOne({
      where: { id: newDate.id },
      include: {
        model: Attraction,
        include: {
          model: Type,
        },
      },
    });
    res.json(newDateWithAttractions);
    // res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'wtf??!' });
  }
});

module.exports = attractionDatesRouter;
