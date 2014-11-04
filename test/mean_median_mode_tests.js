'use strict';

var expect = require('chai').expect;
var mmm = require('../lib/mean_median_mode');

describe('Mean', function() {
  it('gets an accurate mean', function() {
    expect(mmm.mean([2,4,6])).to.eql(4);
  });
});

describe('Median', function() {
  it('gets an accurate median', function() {
    expect(mmm.median([4,5,6])).to.eql(5);
  });
});

describe('Mode', function() {
  it('gets an accurae mode', function() {
  expect(mmm.mode([5,5,6,7])).to.eql(5);
// <<<<<<< HEAD //this is the stuff that we had
//   it('gets an accurae mode', function() {
//     expect(mmm.mode([5,5,6,7])).to.eql(5);
// ======= //this is the stuff that was upstream
//   it('gets an accurate mode', function() {
//     expect(mmm.mode(5,5,6,7)).to.eql(5);
// >>>>>>> bb9fe852322d2b0df5279091659a53bb1271be69
  });
});
