const routes = require('express').Router();

const {getContacts} = require('../controllers/user');




//routes.get('/', jokes.displayJoke);
// routes.get('/', (req, res) => {
//   res.send('Jay McManus')
// });
// routes.get('/homie2', (req, res) => {
//   res.send('Ross Nichols')
// });
// routes.get('/homie3', (req, res) => {
//   res.send('Trevor Opdycke')
// });

routes.get('/', getContacts);
//routes.get('/username', userController.getUsername);

module.exports = routes;