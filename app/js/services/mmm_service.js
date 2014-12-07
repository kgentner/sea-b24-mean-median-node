'use strict';

var meanFunc = require('../mean');
var medianFunc = require('../median');
var modeFunc = require('../mode');

module.exports = function(app) {

  app.factory('mmmBuilder', function() {

    return {
      buildMMM: function(numList) {

        var mean;
        var median;
        var mode;
        var numArray = [];
        var isValidArray = true;
        for (var i = 0; i < numList.length; i++) {
          if (isNaN(parseFloat(numList[i]))) {
            isValidArray = false;
          }
          numArray.push(Number(numList[i]));
        }

        //initially numList is an empty array, but since this app is
        //constantly assessing upon changes,
        //the numList becomes [''] when the input area is manually cleared.
        //The first conditional tests for this.
        if (numList[0] === '') {
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

        return {mean:mean, median:median, mode:mode};
      }
    };
  });
};
