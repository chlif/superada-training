var express = require('express');
var router = express.Router();
var questions = require('../data/survey.json');
var matrix = require('../data/matrix.json');
var survey = {
    data: questions,
    matrix: matrix
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Haku', survey: survey});
});

module.exports = router;
