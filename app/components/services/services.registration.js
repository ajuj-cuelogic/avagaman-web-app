'use strict';

angular.module('registrationService', [])
    .service('registrationService', ['$http', 'config', registrationService]);

function registrationService($http, config) {

    var registrationService = {
    	registration: registration
    };

    return registrationService;

    function registration(employeedata) {
        var data ={
                        "firstName": employeedata.firstName,
                        "lastName": employeedata.lastName,
                        "gender": employeedata.gender,
                        "username": employeedata.username,
                        "password": employeedata.password,
                        "type": "user"
                    };
		return $http({
            method: "POST",
            url: config.apiEndPoint + '/user/signup',
            dataType: 'json',
            data: data
        });
	}

   

};

