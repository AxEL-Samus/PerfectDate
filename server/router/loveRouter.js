const express = require('express');
const { Love } = require('../db/models');

const loveRouter = express.Router();

loveRouter.post('/', async (req, res) => {
    const { id } = req.session.user;
  const { name, sex, pref } = { ...req.body };
  try {
    await Love.create({ name, sex, userId: id, pref });

    // res.json(newLove);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = loveRouter;
