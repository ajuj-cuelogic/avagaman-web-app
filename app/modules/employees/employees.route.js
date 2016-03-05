angular.module('employees')
    .config(['$stateProvider', stateProvider]);

function stateProvider($stateProvider) {

    $stateProvider
        .state('base.employees', {
            url: '/employees',
            views: {
                '@': {
                    controller: 'employeesCtrl',
                    templateUrl: 'app/modules/employees/views/employees.html'
                }
            },
            resolve: {
                employeesList: function(employeesService, localStorageService) {
                    var userId = localStorageService.get("__i");
                    console.log(userId)
                    return employeesService.getEmployeesUserList(userId);
                }
            }
        });
}
