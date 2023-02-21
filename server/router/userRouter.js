const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
  try {
    return res.json(req.session.user);
  } catch (error) {
    return console.log(error);
  }
});

userRouter.post('/signup', async (req, res) => {
  try {
    const { password, email, name, sex } = req.body;
    const hashpass = await bcrypt.hash(password, 10);
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: {
        name,
        pass: hashpass,
        theme: false,
        sex,
      },
    });
    console.log(user, created);
    if (!created) {
      return res.status(401).send('Email уже используется другим пользователем');
    }
    req.session.user = user;
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

userRouter.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const foundUser = await User.findOne({
      where: { email },
    });
    if (!(foundUser && (await bcrypt.compare(password, foundUser.pass)))) {
      return res.sendStatus(401);
    }
    const user = JSON.parse(JSON.stringify(foundUser));
    delete user.pass;
    req.session.user = user;
    return res.sendStatus(200);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
});

userRouter.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid');
});

module.exports = userRouter;
