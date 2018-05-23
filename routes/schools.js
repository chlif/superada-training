var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {

});

router.get('/search/:name', function(req, res, next) {
  var matches = guestions.guestions.filter(function (question) {
    return question.text.toLowerCase().includes(req.params.name.toLowerCase());
  });
  res.json(matches);
});

module.exports = router;
