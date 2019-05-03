const express = require('express');
const router = express.Router();

// @route GET api/messages
// @desc Test route
// @access Public

router.get('/test', (req, res) => {
  res.send('Messages route');
});

module.exports = router;
