const express = require('express');
const router = express.Router();

// DB setup
const env = 'development';
const config = require('../../knexfile')[env];
const knex = require('knex')(config);

// knex
//   .from('users')
//   .select()
//   .then(result => {
//     console.log(result);
//     knex.destroy();
//   })
//   .catch(err => {
//     console.error(err);
//     knex.destroy();
//   });

// @route GET api/users
// @desc Test route
// @access Public

router.get('/test', (req, res) => {
  res.send('User route');
});

// @route GET api/users
// @desc GET all users route
// @access Public

router.get('/', (req, res) => {
  knex
    .select()
    .from('users')
    .then(data => {
      res.send(data);
    });
});

module.exports = router;
