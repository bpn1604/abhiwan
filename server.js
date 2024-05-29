
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/tournamentDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/', routes);

const port = 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
