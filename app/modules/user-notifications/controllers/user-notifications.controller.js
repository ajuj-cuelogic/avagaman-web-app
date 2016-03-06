'use strict';

angular
    .module('userNotifications')
    .controller('userNotificationsCtrl', ['$scope', 'userNotifications', userNotificationsCtrl]);

function userNotificationsCtrl($scope, userNotifications) {

    $scope.userNotifications = userNotifications.data.userNotifications;
    console.log($scope.userNotifications);


}

