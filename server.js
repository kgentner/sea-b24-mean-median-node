'use strict';
/*thanks to Joe Elsey, Stephanie Lingwood, & Charles Renwick for help */

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/build'));

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('server running on port: %d', app.get('port'));
});
