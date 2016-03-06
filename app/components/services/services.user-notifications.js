'use strict';

angular.module('userNotificationsService', [])
    .service('userNotificationsService', ['$http', 'config', userNotificationsService]);

function userNotificationsService($http, config) {

    var userNotificationsService = {
        getAllUserNotification: getAllUserNotification
    };

    return userNotificationsService;

    function getAllUserNotification(username) {
        console.log(username)
        return $http({
            method: "POST",
            url: config.apiEndPoint + '/user/notifications',
            dataType: 'json',
            data: username
        });
    }

};

