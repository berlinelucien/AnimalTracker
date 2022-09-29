import express from 'express';
import createError from 'http-errors';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from "cors";
import { fileURLToPath } from "url";

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// import router to get data
import indexRouter from './routes/index.mjs';
import individualsRouter from './routes/individuals.mjs';
import speciesRouter from './routes/species.mjs';
import sightingsRouter from './routes/sightings.mjs';
import joinTableRouter from './routes/joinTable.mjs'

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log("directory-name 👉️", __dirname);

// view engine setup
app.use(cors());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// path for the database
app.use('/', indexRouter);
app.use('/individuals', individualsRouter);
app.use('/species', speciesRouter);
app.use('/sightings', sightingsRouter)
app.use('/joinTable', joinTableRouter);
// path for animal science here

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
