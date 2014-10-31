
'use strict';
var MeanMedianMode = function() {

  this.mean = function (numArray) {
    // if there are no numbers, then the mean is null
    if (numArray.length === 0){
      return null;
    } else {
      var sum = 0;
      for (var i = 0; i < numArray.length; i++) {
        sum += numArray[i];
      }
      return sum / numArray.length;
    }
  };

  this.median = function(numArray){
    // if there are no numbers, median is null
    if (numArray.length === 0){
      return null;
    } else {
      //sort the array
      numArray.sort(function (a, b) { return a - b; });
      // If the length of array is odd, median is middle number
      if (numArray.length % 2 === 1) {
          return numArray[(numArray.length - 1) / 2];
      } else {
      // if length of array is even, median is avg of two middle numbers
          var a = numArray[(numArray.length / 2) - 1];
          var b = numArray[(numArray.length / 2)];
          return (a + b) / 2;
      }
    }
  };

  this.mode = function (numArray){
    // if there are no numbers, mode is null
    // if there is only one number, mode is that lonely number.
    if (numArray.length === 0) {
      return null;
    } else if (numArray.length === 1){
      return numArray[0];
    } else {

      var maxNum = numArray[0];
      var maxCount = 1;

      //loop through the array
      for (var i = 0; i < numArray.length; i++){
          var count = 0;

          //loop through array
          // and compare to outer loop to count
          // the instances of outer loop item
          for (var j = 0; j < numArray.length; j++){
              if (numArray[j] === numArray[i]){
                  count++;
              }
          }

          // compare current count to MaxCount
          // if count is greater, set MaxNum
          // to current outer loop item
          if (count > maxCount) {
              maxCount = count;
              maxNum = numArray[i];
          }
      }

      return maxNum;
    }
  };


};

var mmm = new MeanMedianMode();
module.exports = mmm;
