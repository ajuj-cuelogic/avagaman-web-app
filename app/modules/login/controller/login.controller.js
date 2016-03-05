'use strict';

angular
    .module('login')
    .controller('LoginCtrl', ['$scope', '$rootScope', '$state', LoginCtrl]);

function LoginCtrl($scope, $rootScope, $state) {
    $scope.credentials = {};

    $scope.login = function() {

        /* //For error message
        $rootScope.errorOccured = true;
        $rootScope.messageCode = "401";*/

        /* for success message
        $rootScope.success = true;
        $rootScope.messageCode = "200";*/

        $state.transitionTo('base.dashboard');

    }

}
