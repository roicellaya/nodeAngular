var express = require('express');
var fs = require('fs');
var util = require('util');
var router = express.Router();
var middlewares = require('../middlewares/validate-fields');
var writeFile = util.promisify(fs.writeFile);

router.get('/', function(req, res, next) {
  res.status(200).json({ title: 'Express' });
});

// Allow CORS to post requests
router.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'content-type, x-user-browser, x-user-os');
  next();
});

router.post('/',
  middlewares.validateRut,
  middlewares.validateCellphone,
  middlewares.validateEmail,
  middlewares.validateIncome,
  function(req, res, next) {
    let data = 'Rut\t\t' + req.body.rut + '\n';
    data = data + 'Cellphone\t' + req.body.cellphone + '\n';
    data = data + 'Email\t\t' + req.body.email + '\n';
    data = data + 'Income\t\t' + req.body.income + '\n';
    // Save data on text file
    writeFile('./data.txt', data)
      .then(function() {
        res.status(200).json({ message: 'Data saved successfully.' })
      })
      .catch(function(error) {
        res.status(400).json({ message: 'Error saving data, please try again.' });
      })
  }
);

module.exports = router;
