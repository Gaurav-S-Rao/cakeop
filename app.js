const express = require('express');
const app = express();
const port = require('./config').PORT;
const universalerrorcontroller = require('./controllers/errorController');
const cakeRouter = require('./routes/cakeRoutes');
const mongoose = require('mongoose');
const AppError = require('./utils/appError');

app.use(express.json());
// app.use(express.bo);
mongoose.set('useFindAndModify', false);
mongoose
  .connect(require('./config').mongoURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('connected to mongoDB...'))
  .catch(err => console.error(err.message));

app.use('/api/cake', cakeRouter);

app.all('*', (req, res, next) => {
  next(
    new AppError(`This url ${req.originalUrl} on this server is not present`)
  );
});

app.use(universalerrorcontroller);

app.listen(port, () => {
  console.log(`server has started on port ${port}`);
});
