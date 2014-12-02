'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var meanFunc = require('./app/js/mean');
var medianFunc = require('./app/js/median');
var modeFunc = require('./app/js/mode');
var app = express();

app.use(express.static(__dirname + '/build'));
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

app.post('/api/mmm', function(req, res) {
  var numArray = [];
  for (var i = 0; i < req.body.numList.length; i++) {
    numArray.push(Number(req.body.numList[i]));
  }
  var mean = meanFunc(numArray);
  var median = medianFunc(numArray);
  var mode = modeFunc(numArray);

  res.json({mean: mean, median: median, mode: mode});
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('server running on port: %d', app.get('port'));
});
