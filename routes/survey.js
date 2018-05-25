var express = require('express');
var router = express.Router();
var questions = require('../data/survey.json');
var matrix = require('../data/matrix.json');
var survey = {
    data: questions,
    matrix: matrix.matrix
};

router.get('/', function(req, res, next) {
  res.json(survey);
});

router.get('/profile/test', function (req, res, next) {
  res.render('profile', {profile:profile})
});


module.exports = router;
