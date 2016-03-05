'use strict';

angular
    .module('login')
    .controller('LoginCtrl', ['$scope', '$rootScope', '$state', 'loginService', LoginCtrl]);

function LoginCtrl($scope, $rootScope, $state, loginService) {
    $scope.credentials = {};

    $scope.login = function() {
        if ($scope.credentials.username !== '' && $scope.credentials.password !== '') {
            loginService.login($scope.credentials)
                .then(function(response) {
                    if (response.status == 200) {

                        $state.transitionTo('base.dashboard');
                    }

                }, function(rejected) {
                    $rootScope.errorOccured = true;
                    $rootScope.errorMessage = "Invalid username/password";
                })
        }
    };

}
