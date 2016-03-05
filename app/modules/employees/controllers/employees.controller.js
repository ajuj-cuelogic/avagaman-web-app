'use strict';

angular
    .module('employees')
    .controller('employeesCtrl', ['$scope', '$rootScope', 'employeesList', '$filter', '$state', 'NgTableParams', 'employeesService', 'localStorageService', employeesCtrl]);

function employeesCtrl($scope, $rootScope, employeesList, $filter, $state, NgTableParams, employeesService, localStorageService) {
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

    $scope.showConfirmationPopup = function(user) {
        $scope.currentUser = user;

        //Set data for popup
        $scope.customButtons = [];
        $scope.customButtons.push({
            'button_text': 'yes',
            'onclick': $scope.sendNotificationToUser,
            'class': 'btn btn-default'
        });
        $scope.customButtons.push({
            'button_text': 'Cancel',
            'class': 'btn btn-default cancel-btn'
        });
        $scope.message = "Please type your message to inform";
        $scope.showInputBox = true;
        $scope.headerText = "Notify User";
        $('#alertMessage').modal('show');
    }

    $scope.sendNotificationToUser = function(userMessage) {
        console.log(userMessage);
        var notificationData = {
            username: localStorageService.get('__u'),
            toUserId: $scope.currentUser._id,
            logMessage: userMessage,
            isNotified: $scope.currentUser.logState.toString()
        }
        console.log(notificationData)
        console.log($scope.currentUser)
        employeesService.sendNotificationToUser(notificationData)
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error)
            })

    }

}
