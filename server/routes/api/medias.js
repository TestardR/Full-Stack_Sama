const express = require('express');
const router = express.Router();

// @route GET api/medias
// @desc Test route
// @access Public

router.get('/test', (req, res) => {
  res.send('Media route');
});

module.exports = router;
