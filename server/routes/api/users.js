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
    .orderBy('id')
    .then(data => {
      res.send(data);
    });
});

// @route GET api/users/:id
// @desc GET a user by id
// @access Public
router.get('/:id', (req, res) => {
  knex('users')
    .where({ id: req.params.id })
    .select()
    .then(data => {
      res.send(data);
    });
});

// @route GET api/users/:id/medias
// @desc GET all medias from a user by id
// @access Public
router.get('/:id/medias', (req, res) => {
  knex('users')
    .join('media', 'users.id', '=', 'media.userId')
    .where({ 'users.id': req.params.id })
    .select()
    .then(data => {
      res.send(data);
    });
});

// @route GET api/users/:id/messages
// @desc GET all messages from a user by id
// @access Public
router.get('/:id/messages', (req, res) => {
  knex('users')
    .join('messages', 'users.id', '=', 'messages.senderId')
    .where({ 'users.id': req.params.id })
    .select()
    .then(data => {
      res.send(data);
    });
});

// @route GET api/users/:id/all
// @desc GET all messages & medias from a user by id
// @access Public
router.get('/:id/all', (req, res) => {
  knex('users')
    .join('messages', 'users.id', '=', 'messages.senderId')
    .join('media', 'users.id', '=', 'media.userId')
    .where({ 'users.id': req.params.id })
    .select()
    .then(data => {
      res.send(data);
    });
});

module.exports = router;
