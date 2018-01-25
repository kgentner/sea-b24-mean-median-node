'use strict';

var median = function(numArray) {
    // if there are no numbers, median is null
    if (numArray.length === 0) {
        return null;
    } else {
    //sort the array
        numArray.sort(function(a, b) { return a - b; });
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

module.exports = median;
