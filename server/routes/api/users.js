const express = require('express');
const router = express.Router();

// DB setup
const env = 'development';
const config = require('../../db/knexfile')[env];
const knex = require('knex')(config);

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
