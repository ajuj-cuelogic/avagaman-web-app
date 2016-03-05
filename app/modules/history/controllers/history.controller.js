'use strict';

angular
    .module('history')
    .controller('historyCtrl', ['$scope', '$rootScope', '$filter', '$state', 'NgTableParams', 'previousHistory',  historyCtrl]);

function historyCtrl($scope, $rootScope, $filter, $state, NgTableParams, previousHistory) {
    //On resolve we are calling service to fetch admin users list
    $scope.previousHistory = previousHistory;
    $scope.searchFilter = {
        search: ''
    };

    $scope.userDetials = {};

    $scope.tableParams = new NgTableParams({
        page: 1,
        count: 14,
        filter: $scope.searchFilter
    }, {
        total: $scope.previousHistory.length,
        getData: function($defer, params) {

            $scope.data = params.sorting() ? $filter('orderBy')($scope.previousHistory, params.orderBy()) : $scope.previousHistory;
            $scope.data = params.filter() ? $filter('filter')($scope.data, params.filter().search) : $scope.data;
            params.total($scope.data.length);
            $scope.data = $scope.data.slice((params.page() - 1) * params.count(), params.page() * params.count());
            $defer.resolve($scope.data);
        }
    });

}
