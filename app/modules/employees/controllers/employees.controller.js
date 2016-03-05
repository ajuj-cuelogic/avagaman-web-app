'use strict';

angular
    .module('employees')
    .controller('employeesCtrl', ['$scope', '$rootScope', 'employeesList', '$filter', '$state', 'NgTableParams', 'employeesService', employeesCtrl]);

function employeesCtrl($scope, $rootScope, employeesList, $filter, $state, NgTableParams, employeesService) {
    $scope.employeesDetials = employeesList.data.user;
    $scope.searchFilter = {
        search: ''
    };

    console.log($scope.employeesDetials)

    $scope.tableParams = new NgTableParams({
        filter: $scope.searchFilter
    }, {
        counts: [],
        getData: function($defer, params) {

            $scope.data = params.sorting() ? $filter('orderBy')($scope.employeesDetials, params.orderBy()) : $scope.employeesDetials;

            $defer.resolve($scope.data);
        }
    });

}
