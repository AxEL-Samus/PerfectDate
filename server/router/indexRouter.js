const express = require('express');
const { Date } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const dates = await Date.findAll();
  const initState = { dates };
  res.render('Layout', initState);
});

module.exports = router;
