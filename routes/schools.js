var express = require('express');
var router = express.Router();
var data = require('../data/data.json');

router.get('/', function(req, res, next) {
  res.json(data.schools);
});

router.get('/search/:name', function(req, res, next) {
  var matches = data.schools.filter(function (school) {
    return school.name.toLowerCase().includes(req.params.name.toLowerCase());
  });
  res.json(matches);
});

module.exports = router;
