const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

const userRouter = express.Router();

userRouter.get('/signup', (req, res) => {
  res.render('Layout');
});

userRouter.post('/signup', async (req, res) => {
  try {
    const { pass, email, name } = req.body;
    const hashpass = await bcrypt.hash(pass, 10);
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: {
        name,
        pass: hashpass,
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
    res.sendStatus(500);
  }
});

userRouter.get('/login', (req, res) => {
  res.render('Layout');
});

userRouter.post('/login', async (req, res) => {
  try {
    const { email, pass } = req.body;
    const foundUser = await User.findOne({
      where: { email },
    });
    if (!(foundUser && (await bcrypt.compare(pass, foundUser.pass)))) {
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
  res.redirect('/');
});

module.exports = userRouter;
