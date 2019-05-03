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

// @route GET api/users/test
// @desc Tests users route
// @access Public

// router.get('/', (req, res) => {
//   res.json({ msg: 'Users Works' });
// });

module.exports = router;
