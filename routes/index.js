const routes = require('express').Router();
const jokes = require('../controllers/');

//routes.get('/', jokes.displayJoke);
routes.get('/', (req, res) => {
  res.send('Jay McManus')
});
routes.get('/homie2', (req, res) => {
  res.send('Ross Nichols')
});
routes.get('/homie3', (req, res) => {
  res.send('Trevor Opdycke')
});

module.exports = routes;