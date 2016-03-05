'use strict';

angular
    .module('login')
    .controller('LoginCtrl', ['$scope', '$rootScope', '$state', 'loginService', LoginCtrl]);

function LoginCtrl($scope, $rootScope, $state, loginService) {
    $scope.credentials = {};
   console.log($scope.credentials)
     $scope.login = function (){
   console.log($scope.credentials)

         loginService.login($scope.credentials)
         .then(function(response) {          
            console.log(response);

          }, function(rejected){
                  $scope.error="Invalid username/password";
          })
  };

}
