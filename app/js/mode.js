'use strict';

var mode = function(numArray) {
  // if there are no numbers, mode is null
  // if there is only one number, mode is the loneliest number.
  if (numArray.length === 0) {
    return null;
  } else if (numArray.length === 1) {
    return numArray[0];
  } else {
    var dict = {};
    var modeNum = numArray[0];
    var maxCount = 1;

    //Loop through array
    for (var i = 0; i < numArray.length; i++) {
      var num = numArray[i];

        //if num key is not in dict, then add it and set count value to 1
      if (dict[num] == null) {
        dict[num] = 1;
      //if num key is in dict, then increment the count value
      } else {
        dict[num]++;
      }
        //if count value of num is greater than maxCount
        //then make num the mode and update maxCount
      if (dict[num] > maxCount) {
        modeNum = num;
        maxCount = dict[num];
      }
    }
    return modeNum;
  }
};

module.exports = mode;
