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
                        console.log(response)
                        localStorageService.set('__t', response.data.data.__s);
                        localStorageService.set('__i', response.data.data._id);
                        localStorageService.set('__u', response.data.data.user.username);
                        localStorageService.set('__l', response.data.data.user.logState);
                        $rootScope.fullname = response.data.data.user.firstName+" "+response.data.data.user.lastName;

                        $state.transitionTo('base.dashboard');
                    }

                }, function(rejected) {
                    $rootScope.errorOccured = true;
                    $rootScope.errorMessage = "Invalid username/password";
                })
        }
    };
    $scope.logout = function() {
        localStorageService.clearAll();
        $state.transitionTo('login');
    };

    $scope.$on('event:google-plus-signin-success', function(event, authResult) {
        console.log(event)
        console.log(authResult)
        console.log("Success");
        // Send login to server or save into cookie
    });

}
