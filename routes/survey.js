var express = require('express');
var router = express.Router();
var questions = require('../data/survey.json');
var matrix = require('../data/matrix.json');

router.get('/', function(req, res, next) {
  res.json(questions.questions);
});

router.get('/search/:name', function(req, res, next) {
  var matches = guestions.guestions.filter(function (question) {
    return question.text.toLowerCase().includes(req.params.name.toLowerCase());
  });
  res.json(matches);
});

module.exports = router;
