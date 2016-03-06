'use strict';

angular
    .module('userNotifications')
    .config(['$stateProvider', stateProvider]);

function stateProvider($stateProvider) {

    $stateProvider
        .state('base.userNotifications', {
            url: '/user-notifications',
            views: {
                '@': {
                    controller: 'userNotificationsCtrl',
                    templateUrl: 'app/modules/user-notifications/views/user-notifications.html'
                }
            },
            resolve: {
                userNotifications: function(userNotificationsService, localStorageService) {
                    var username = localStorageService.get('__u');
                    return userNotificationsService.getAllUserNotification({'username': username});
                }
            }
        })
}
