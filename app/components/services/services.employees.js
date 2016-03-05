'use strict';

angular.module('employeesService', ['providers'])
    .service('employeesService', ['$http', 'config', employeesService]);

function employeesService($http, config) {

    var employeesService = {
        getEmployeesUserList: getEmployeesUserList,
    };

    return employeesService;

    function getEmployeesUserList() {

        return $http({
            method: "GET",
            url: config.apiEndPoint + '/get/all/users',
        });
    }
}
