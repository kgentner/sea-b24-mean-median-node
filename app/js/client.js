'use strict';

require('angular/angular');

var mmmApp = angular.module('mmmApp', []);

//services
require('./services/resource_backend_service')(mmmApp);

//controllers
require('./controllers/mmm_controller')(mmmApp);
