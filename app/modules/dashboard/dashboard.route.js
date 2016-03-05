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
                dashboardDetails: function(dashboardService, localStorageService) {
                    var userId = localStorageService.get('__i');
                    return dashboardService.getDashboardData(userId);
                }
            }
        });

}
