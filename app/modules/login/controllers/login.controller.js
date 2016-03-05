'use strict';

angular
    .module('login')
    .controller('LoginCtrl', ['$scope', '$rootScope', '$state', 'loginService', 'localStorageService', LoginCtrl]);

function LoginCtrl($scope, $rootScope, $state, loginService, localStorageService) {
    $scope.credentials = {};
    $scope.login = function() {
        if ($scope.credentials.username !== '' && $scope.credentials.password !== '') {
            loginService.login($scope.credentials)
                .then(function(response) {
                    if (response.status == 200) {
                      localStorageService.set('__t', response.data.data.__s);
                      localStorageService.set('__i', response.data.data._id);
                      localStorageService.set('__u', response.data.data.username);
                      $state.transitionTo('base.dashboard');
                    }

                }, function(rejected) {
                    $rootScope.errorOccured = true;
                    $rootScope.errorMessage = "Invalid username/password";
                })
        }
    };
}

