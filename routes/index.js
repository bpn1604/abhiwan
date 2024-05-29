const express = require('express');
const tournamentRoutes = require('./tournament'); 

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to our Tournament').end();
});

router.use('/tournament', tournamentRoutes);

module.exports = router;
