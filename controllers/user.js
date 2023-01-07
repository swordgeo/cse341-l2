const mongodb = require('../db/connect');

const getContacts = async (req, res, next) => {
  const result = await mongodb.getDb().db("cse341-database").collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

// const getUsername = async (req, res, next) => {
//   const result = await mongodb.getDb().db().collection('user').find();
//   result.toArray().then((lists) => {
//     res.setHeader('Content-Type', 'application/json');
//     res.status(200).json(lists[0].username);
//   });
// };

module.exports = { getContacts};