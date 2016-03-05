'use strict';

angular
    .module('dashboard')
    .controller('dashboardCtrl', ['$scope', '$filter', '$rootScope', 'dashboardDetails', 'NgTableParams', 'localStorageService', 'dashboardService', dashboardCtrl]);

function dashboardCtrl($scope, $filter, $rootScope, dashboardDetails, NgTableParams, localStorageService, dashboardService) {
    $scope.dashboardDetails = dashboardDetails;
    $scope.userDetials = dashboardDetails.data.data.user;
    $scope.userOldHistory = dashboardDetails.data.data.userOldHistory;
    $scope.userTodayHistory = dashboardDetails.data.data.userTodayHistory.reverse();
    $scope.firstLoggedInData = _.minBy(dashboardDetails.data.data.userTodayHistory, function(o) { return o.logTime; });

    $scope.searchFilter = {
        search: ''
    };

    $scope.checkInCheckOutUser = function(status) {

        var userData = {
            "username": localStorageService.get('__u'),
            "logState": (status ? 0 : 1).toString()
        }

        dashboardService.checkInCheckOutUser(userData)
            .then(function(response) {
                console.log(response);
                $scope.userDetials.logState = $scope.userDetials.logState ? 0 : 1;
            })
            .catch(function(error) {
                console.log(error)
            });

    }

    // $scope.tableParams = new NgTableParams({
    //     page: 1,
    //     count: 14,
    //     filter: $scope.searchFilter
    // }, {
    //     total: $scope.dashboardDetails.length,
    //     getData: function($defer, params) {

    //         $scope.data = params.sorting() ? $filter('orderBy')($scope.dashboardDetails, params.orderBy()) : $scope.employeesDetials;
    //         $scope.data = params.filter() ? $filter('filter')($scope.data, params.filter().search) : $scope.data;
    //         params.total($scope.data.length);
    //         $scope.data = $scope.data.slice((params.page() - 1) * params.count(), params.page() * params.count());
    //         $defer.resolve($scope.data);
    //     }
    // });
}
