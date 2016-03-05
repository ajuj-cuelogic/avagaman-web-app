'use strict';

angular
    .module('dashboard')
    .config(['$stateProvider', stateProvider]);

function stateProvider($stateProvider) {

    $stateProvider
        .state('base.dashboard', {
            url: '/dashboard',
            views: {
                '@': {
                    controller: 'dashboardCtrl',
                    templateUrl: 'app/modules/dashboard/views/dashboard.html'
                }
            },
            resolve: {

            }
        });

}
