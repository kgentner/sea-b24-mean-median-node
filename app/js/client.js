'use strict';

require('angular/angular');

var mmmApp = angular.module('mmmApp', []);

//services
require('./services/mmm_service')(mmmApp);

//controllers
require('./controllers/mmm_controller')(mmmApp);
