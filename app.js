const express = require('express');
const app = express();
const port = require('./config').PORT;
const cakeRouter = require('./routes/cakeRoutes');
const mongoose = require('mongoose');

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
  .catch(err => console.error(err));

app.use('/api/cake', cakeRouter);

app.listen(port, () => {
  console.log(`server has started on port ${port}`);
});
