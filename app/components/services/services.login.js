'use strict';

angular.module('loginService', [])
    .service('loginService', ['$http', 'config', loginService]);

function loginService($http, config) {

    var loginService = {
    	login: login
    };

    return loginService;

    function login(credentials) {
		return $http({
            method: "POST",
            url: config.apiEndPoint + '/user/login',
            dataType: 'json',
            data: credentials
        });
	}

   

};

