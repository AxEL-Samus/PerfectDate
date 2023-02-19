const express = require('express');
const { Date } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const dates = await Date.findAll();
  console.log(products)
  const initState = { dates };
  res.render('Layout', initState);
});

module.exports = router;