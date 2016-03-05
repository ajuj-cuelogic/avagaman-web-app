'use strict';

angular
    .module('dashboard')
    .controller('dashboardCtrl', ['$scope', '$rootScope', dashboardCtrl]);

function dashboardCtrl($scope, $rootScope) {
    console.log("INnn");
}
