'use strict';

angular.module('history')
    .config(['$stateProvider', stateProvider]);

function stateProvider($stateProvider) {

    $stateProvider
        .state('base.history', {
            url: '/my-history',
            views: {
                '@': {
                    controller: 'historyCtrl',
                    templateUrl: 'app/modules/history/views/history.html'
                }
            },
            resolve: {
                previousHistory: function(historyService) {
                    return historyService.getUserPeriviousHistory();
                }
            }
        });
}
