const express = require('express');
const router = express.Router();

// DB setup
const env = 'development';
const config = require('../../db/knexfile')[env];
const knex = require('knex')(config);

// @route GET api/messages
// @desc Test route
// @access Public

router.get('/test', (req, res) => {
  res.send('Messages route');
});

// @route GET api/messages
// @desc GET all messages route
// @access Public

router.get('/', (req, res) => {
  knex
    .select()
    .from('messages')
    .then(data => {
      res.send(data);
    });
});

module.exports = router;
