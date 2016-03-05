'use strict';

angular.module('registrationService', [])
    .service('registrationService', ['$http', 'config', registrationService]);

function registrationService($http, config) {

    var registrationService = {
    	registration: registration
    };

    return registrationService;

    function registration(employeedata) {
		return $http({
            method: "POST",
            url: config.apiEndPoint + '/user/signup',
            dataType: 'json',
            data: employeedata
        });
	}

   

};

