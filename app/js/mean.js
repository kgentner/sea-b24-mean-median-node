'use strict';

var mean = function(numArray) {
  // if there are no numbers, then the mean is null
  if (numArray.length === 0) {
    return null;
  } else {
    var sum = 0;
    for (var i = 0; i < numArray.length; i++) {
      sum += numArray[i];
    }
    return sum / numArray.length;
  }
};

module.exports = mean;
