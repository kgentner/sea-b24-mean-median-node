'use strict';

var chai = require('chai');
var expect = chai.expect;
var chaihttp = require('chai-http');

chai.use(chaihttp);
require('../../server');

describe('Mean Median & Mode Server', function() {
  it('should return html', function(done) {
    chai.request('http://localhost:3000')
      .get('/')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.type).to.eql('text/html');
        done();
      });
  });
});
