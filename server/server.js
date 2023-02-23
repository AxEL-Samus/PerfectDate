const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
const morgan = require('morgan');
const store = require('session-file-store');
const session = require('express-session');
const cors = require('cors');
const indexRouter = require('./router/indexRouter');
const dateRouter = require('./router/dateRouter');
const userRouter = require('./router/userRouter');
const typesRouter = require('./router/typesRouter');
const attractionDatesRouter = require('./router/attractionDatesRouter');
const loveRouter = require('./router/loveRouter');

require('dotenv').config();

const PORT = process.env.SERVER_PORT || 3002;
const app = express();
const FileStore = store(session);

const sessionConfig = {
  name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: process.env.SESSION_SECRET ?? 'test', // Секретное слово для шифрования, может быть любым
  resave: true, // Пересохранять ли куку при каждом запросе
  store: new FileStore(),
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
  },
};

app.use(cors({ origin: true, credentials: true }));
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));

app.use((req, res, next) => {
  res.locals.user = req.session.user;
  next();
});

app.use('/', indexRouter);
app.use('/api/users/', userRouter);
app.use('/api/dates/', dateRouter);
app.use('/api/types/', typesRouter);
app.use('/api/attractiondates/', attractionDatesRouter);
app.use('/api/loves/', loveRouter);

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
