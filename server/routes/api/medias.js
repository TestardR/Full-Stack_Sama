const express = require('express');
const router = express.Router();

// DB setup
const env = 'development';
const config = require('../../db/knexfile')[env];
const knex = require('knex')(config);

// @route GET api/medias
// @desc Test route
// @access Public

router.get('/test', (req, res) => {
  res.send('Media route');
});

// @route GET api/messages
// @desc GET all messages route
// @access Public

router.get('/', (req, res) => {
  knex
    .select()
    .from('media')
    .then(data => {
      res.send(data);
    });
});

// @route GET api/medias/:id
// @desc GET a media by id
// @access Public
router.get('/:id', (req, res) => {
  knex('media')
    .where({ id: req.params.id })
    .select()
    .then(data => {
      res.send(data);
    });
});

module.exports = router;
