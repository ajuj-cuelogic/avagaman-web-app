'use strict';

angular
    .module('registration')
    .controller('RegistrationCtrl', ['$scope', '$rootScope', '$state', 'registrationService', RegistrationCtrl]);

function RegistrationCtrl($scope, $rootScope, $state, registrationService) {
    $scope.employeedata = {};
   console.log($scope.employeedata)
     $scope.registration = function (){
   console.log($scope.employeedata)

         registrationService.registration($scope.employeedata)
         .then(function(response) {          
            console.log(response);

          }, function(rejected){
                  $scope.error="Invalid data";
          })
  };

}
