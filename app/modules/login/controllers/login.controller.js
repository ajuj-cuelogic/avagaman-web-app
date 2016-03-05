'use strict';

angular
    .module('login')
    .controller('LoginCtrl', ['$scope', '$rootScope', '$state', LoginCtrl]);

function LoginCtrl($scope, $rootScope, $state) {
    $scope.credentials = {};
    $scope.login = function() {
    }

}
