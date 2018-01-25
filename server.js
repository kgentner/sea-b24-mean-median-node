'use strict';
/*thanks to Joe Elsey, Stephanie Lingwood, & Charles Renwick for help */

var express = require('express');
var bodyParser = require('body-parser');
var meanFunc = require('./app/js/mean');
var medianFunc = require('./app/js/median');
var modeFunc = require('./app/js/mode');
var app = express();

app.use(express.static(__dirname + '/build'));
app.use(bodyParser.json());

app.post('/api/mmm', function(req, res) {

    var mean;
    var median;
    var mode;
    var numArray = [];
    var isValidArray = true;

    for (var i = 0; i < req.body.numList.length; i++) {
        if (isNaN(parseFloat(req.body.numList[i]))) {
            isValidArray = false;
        }
        numArray.push(Number(req.body.numList[i]));
    }

    //initially numList is an empty array, but since this app is
    //constantly assessing upon changes,
    //the numList becomes [''] when the input area is manually cleared.
    //The first conditional tests for this.
    if (req.body.numList[0] === '') {
        mean = null;
        median = null;
        mode = null;
    } else if (isValidArray) {
        mean = meanFunc(numArray);
        median = medianFunc(numArray);
        mode = modeFunc(numArray);
    } else { //if any element of the array is not a number
        mean = 'invalid input';
        median = 'invalid input';
        mode = 'invalid input';
    }

    res.json({mean: mean, median: median, mode: mode});
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
    console.log('server running on port: %d', app.get('port'));
});
