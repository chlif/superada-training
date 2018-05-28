var express = require('express');
var router = express.Router();
var questions = require('../data/survey.json');
var matrix = require('../data/matrix.json');
var survey = {
    data: questions,
    matrix: matrix.matrix
};
var profiles = require('../data/profiles.json');

router.get('/', function(req, res, next) {
  res.json(survey);
});

router.get('/profile/', (req, res, next) => {
  if (req.query.value === undefined) {
    422
  }
  else {
    var valuesArr = req.query.value.split("");
    var profile = findProfile(valuesArr);
  }
  res.render('profile', {profile: profile});
});

function findProfile(needle) {
  let profileDistances = findNearestProfile(needle);
  let profileName = chooseProfile(profileDistances);
  for(i = 0; i < profiles.profiles.length; i++) {
    if (profiles.profiles[i].name === profileName) {
      console.log(profiles.profiles[i]);
      return profiles.profiles[i];
    }
  }
}

function chooseProfile(profileDistances) {
  var shortestDistance = profileDistances[0].distance;
  var shortestDistanceName = profileDistances[0].name;
  for(i = 1; i < profileDistances.length; i++) {
    if (profileDistances[i].distance <  shortestDistance) {
      shortestDistance = profileDistances[i].distance;
      shortestDistanceName = profileDistances[i].name;
    }
  }
  console.log(shortestDistanceName);
  return shortestDistanceName;
}

function findNearestProfile(needle) {
  var profiles = scaleAnswers();

  let profilesComparedToUser = profiles.map(role => {
    var profileComparedToUser = [];
    for(i = 0; i < role.answers.length; i++) {
      profileComparedToUser[i] = Math.pow((needle[i] - role.answers[i]), 2);
    };
    var distance = Math.sqrt(sum(profileComparedToUser));
    var rProfile = {"name": role.name, "distance": distance};
    return rProfile;
  });
  console.log(profilesComparedToUser);
  return profilesComparedToUser;
}

function scaleAnswers() {
  let profiles = survey.matrix.roles;

  let scaledProfiles = profiles.map(role => {
    var scaledAnswers = role.answers.map(answer => {
      return answer/(role.count);
    });
    var rRole = {"name": role.name, "answers": scaledAnswers};
    return rRole;
  });

  console.log(scaledProfiles);
  return scaledProfiles;
}

function sum(userValues) {
  var sum = 0
  for (i = 0; i < userValues.length; sum += userValues[i++]);
  return sum;
}


module.exports = router;
