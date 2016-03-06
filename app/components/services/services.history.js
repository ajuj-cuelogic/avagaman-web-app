'use strict';

angular.module('historyService', ['providers'])
    .service('historyService', ['$http', 'config', historyService]);

function historyService($http, config) {

    var historyService = {
        getUserPreviousHistory: getUserPreviousHistory,
    };

    return historyService;

    function getUserPreviousHistory(username) {

        return $http({
            method: "POST",
            url: config.apiEndPoint + '/user/history',
            dataType: 'json',
            data: username
        });
    }
}
