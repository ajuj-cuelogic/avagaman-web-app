'use strict';

angular.module('employeesService', ['providers'])
    .service('employeesService', ['$http', 'config', employeesService]);

function employeesService($http, config) {

    var employeesService = {
        getEmployeesUserList: getEmployeesUserList,
        sendNotificationToUser: sendNotificationToUser
    };

    return employeesService;

    function getEmployeesUserList(userId) {

        return $http({
            method: "GET",
            url: config.apiEndPoint + '/get/all/users/' + userId,
        });
    }

    function sendNotificationToUser(notificationData) {

        return $http({
            method: "POST",
            url: config.apiEndPoint + '/user/notify',
            dataType: notificationData,
            data: notificationData

        });
    }
}
