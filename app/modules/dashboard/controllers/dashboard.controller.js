'use strict';

angular
    .module('dashboard')
    .controller('dashboardCtrl', ['$scope', '$filter', '$rootScope', 'dashboardDetails', 'NgTableParams', 'localStorageService', 'dashboardService', dashboardCtrl]);

function dashboardCtrl($scope, $filter, $rootScope, dashboardDetails, NgTableParams, localStorageService, dashboardService) {
    $scope.dashboardDetails = dashboardDetails;
    $scope.userDetials = dashboardDetails.data.data.user;
    $scope.userOldHistory = dashboardDetails.data.data.userOldHistory;
    $scope.userTodayHistory = dashboardDetails.data.data.userTodayHistory.reverse();
    console.log($scope.userOldHistory)
    $scope.firstLoggedInData = _.minBy(dashboardDetails.data.data.userTodayHistory, function(o) {
        return o.logTime;
    });

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

    $scope.tableParams = new NgTableParams({}, {
        counts: [],
        getData: function($defer, params) {

            $scope.data = params.sorting() ? $filter('orderBy')($scope.userOldHistory, params.orderBy()) : $scope.userOldHistory;
            $defer.resolve($scope.data);
        }
    });
}
