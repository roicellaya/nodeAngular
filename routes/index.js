var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.status(200).json({ title: 'Express' });
});

// Allow CORS to post requests
router.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'content-type, x-user-browser, x-user-os');
  next();
});

router.post('/', function(req, res, next) {
  res.status(200).json({ success: true });
});

module.exports = router;
