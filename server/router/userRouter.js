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
    if (!password || !email || !name || !sex) {
      return res.status(400).send({ message: 'Заполните все поля' });
    }
    const hashpass = await bcrypt.hash(password, 5);
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: {
        name,
        pass: hashpass,
        theme: false,
        sex,
      },
    });
    if (!created) {
      return res.status(403).send({ message: 'Пользователь уже существует' });
    }
    req.session.user = {
      id: user.id,
      name: user.name,
      email: user.email,
    };
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

userRouter.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({ message: 'Заполните все поля' });
    }
    const foundUser = await User.findOne({
      where: { email },
    });
    if (!foundUser) {
      return res.status(400).send({ message: 'Пользователь не найден' });
    }
    const compare = await bcrypt.compare(password, foundUser.password);
    if (compare) {
      req.session.user = { id: foundUser.id, name: foundUser.name };
    } else {
      return res.status(400).send({ message: 'Неправильный пароль или логин' });
    }
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
});

userRouter.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid').sendStatus(200);
});

module.exports = userRouter;
