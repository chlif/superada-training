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

router.get('/profile/', (req, res, next) => {
  if (req.query.values === undefined) {
  //  422
  }
  else {
    // Split string to array
    scaleAnswers();
  }
});

function findProfile(valuesArr) {
  let profiles = survey.matrix.roles;
  let nearestProfileName = findNearestProfile(needle, profiles);
  return chooseProfile(nearestProfileName);
}

function findNearestProfile(needle, profiles) {

}

function scaleAnswers(valuesArr) {
  let profiles = survey.matrix.roles;

  profiles.forEach((profile, index) => {
    let scaledProfile = answers.map((val, i, answers) => {
      return val/(count);
    });
    console.log(scaledProfile);
  });

  profiles.forEach((profile, index) => {
    let userValues = valuesArr.map((val, i, valuesArr) => {
      return pow((val - scaledAnswers[i]), 2);
    });
    console.log(userValues);
  });

  return sqrt($sum(userValues));
}


function sum(userValues) {
  var sum = 0
  for (var i = 0; i < userValues.length(); sum += array[i++]);
  return sum;
}


module.exports = router;
