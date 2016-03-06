'use strict';

angular
    .module('registration')
    .controller('RegistrationCtrl', ['$scope', '$rootScope', '$state', 'registrationService', RegistrationCtrl]);

function RegistrationCtrl($scope, $rootScope, $state, registrationService) {
    $scope.employeedata = {};
    $scope.registration = function() {
        if ($scope.employeedata.username.indexOf("@") >= 0) {
            $scope.employeedata.username = $scope.employeedata.username.substring(0, $scope.employeedata.username.indexOf("@"));
        }
        $scope.employeedata.username = $scope.employeedata.username + "@cuelogic.co.in";
        if ($scope.validateForm()) {
            $scope.employeedata.type = "user";
            registrationService.registration($scope.employeedata)
                .then(function(response) {
                    if (response.status == 200) {
                        $state.transitionTo('login');
                    }

                }, function(rejected) {
                    $rootScope.errorOccured = true;
                    $rootScope.errorMessage = rejected.message;
                })
        }
    };

    $scope.validateForm = function() {
        $rootScope.errorMessage = "";
        if ($scope.employeedata.firstName == '') {
            $rootScope.errorMessage = "Please enter firstname";
        } else if ($scope.employeedata.lastName == '') {
            $rootScope.errorMessage = "Please enter lastname";
        } else if ($scope.employeedata.gender == '') {
            $rootScope.errorMessage = "Please select gender";
        } else if ($scope.employeedata.username == '') {
            $rootScope.errorMessage = "Please enter username";
        } else if ($scope.employeedata.password == '') {
            $rootScope.errorMessage = "Please enter password";
        } else if ($scope.employeedata.confirmPassword == '' || $scope.employeedata.password != $scope.employeedata.confirmPassword) {
            $rootScope.errorMessage = "Confirm password should be same as password entered";
        }
        if ($rootScope.errorMessage == "") {
            return true;
        } else {
            return false;
        }
    }
}
