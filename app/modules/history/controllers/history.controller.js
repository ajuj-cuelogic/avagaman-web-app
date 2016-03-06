'use strict';

angular
    .module('history')
    .controller('historyCtrl', ['$scope', '$rootScope', '$filter', '$state', 'NgTableParams', 'previousHistory',  historyCtrl]);

function historyCtrl($scope, $rootScope, $filter, $state, NgTableParams, previousHistory) {
    //On resolve we are calling service to fetch admin users list
    $scope.previousHistory = previousHistory.data.data.userOldHistory;
    $scope.searchFilter = {
        search: ''
    };

    $scope.tableParams = new NgTableParams({
        filter: $scope.searchFilter
    }, {
        counts: [],
        getData: function($defer, params) {

            $scope.data = params.sorting() ? $filter('orderBy')($scope.previousHistory, params.orderBy()) : $scope.previousHistory;
            $scope.data = params.filter() ? $filter('filter')($scope.data, params.filter().search) : $scope.data;

            $defer.resolve($scope.data);
        }
    });

    $scope.getTimeDiffernce = function(start, end) {
        //return moment.utc(moment(end).diff(moment(start))).format("mm")
        var time = (end - start) / (60 * 1000);

        if (time < 60) {
            return (time + ' min');
        } else {
            time = ((time/60));
            return (Math.round(time * 100) / 100 + ' hrs');
        }


    }

}
