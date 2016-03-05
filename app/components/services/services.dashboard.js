'use strict';

angular.module('dashboardService', ['providers'])
    .service('dashboardService', ['$http', 'config', dashboardService]);

function dashboardService($http, config) {

    var dashboardService = {
        getDashboardData: getDashboardData,
        checkInCheckOutUser: checkInCheckOutUser,
    };

    return dashboardService;

    function checkInCheckOutUser(userData) {
        return $http({
            method: "POST",
            url: config.apiEndPoint + '/user/activity/add',
            dataType: 'json',
            data: userData
        });
    }

    function getDashboardData(userId) {
        return $http({
            method: "GET",
            url: config.apiEndPoint + '/get/user/dashboard/'+ userId, // Concat api for fetching admin user list
        });

   /*     return [{
            name: 'abc lmn',
            email: 'abc.pqr@gmail.com',
            group: 'l1',
            active: 'active',

        }, {
            name: 'zxy dsa',
            email: 'zxy.dsa@gmail.com',
            group: 'l2',
            active: 'inactive',

        }, {
            name: 'bcs ldn',
            email: 'bcs.ldn@gmail.com',
            group: 'l3',
            active: 'active',

        }, {
            name: 'dasd psods',
            email: 'dasd.psods@gmail.com',
            group: 'admin',
            active: 'active',

        }, {
            name: 'abc lmn',
            email: 'abc.pqr@gmail.com',
            group: 'l1',
            active: 'active',

        }, {
            name: 'zxy dsa',
            email: 'zxy.dsa@gmail.com',
            group: 'l2',
            active: 'inactive',

        }, {
            name: 'bcs ldn',
            email: 'bcs.ldn@gmail.com',
            group: 'l3',
            active: 'active',

        }, {
            name: 'dasd psods',
            email: 'dasd.psods@gmail.com',
            group: 'admin',
            active: 'active',

        }, {
            name: 'abc lmn',
            email: 'abc.pqr@gmail.com',
            group: 'l1',
            active: 'active',

        }, {
            name: 'zxy dsa',
            email: 'zxy.dsa@gmail.com',
            group: 'l2',
            active: 'inactive',

        }, {
            name: 'bcs ldn',
            email: 'bcs.ldn@gmail.com',
            group: 'l3',
            active: 'active',

        }, {
            name: 'dasd psods',
            email: 'dasd.psods@gmail.com',
            group: 'admin',
            active: 'active',

        }, {
            name: 'abc lmn',
            email: 'abc.pqr@gmail.com',
            group: 'l1',
            active: 'active',

        }, {
            name: 'zxy dsa',
            email: 'zxy.dsa@gmail.com',
            group: 'l2',
            active: 'inactive',

        }, {
            name: 'bcs ldn',
            email: 'bcs.ldn@gmail.com',
            group: 'l3',
            active: 'active',

        }, {
            name: 'dasd psods',
            email: 'dasd.psods@gmail.com',
            group: 'admin',
            active: 'active',

        }, {
            name: 'abc lmn',
            email: 'abc.pqr@gmail.com',
            group: 'l1',
            active: 'active',

        }, {
            name: 'zxy dsa',
            email: 'zxy.dsa@gmail.com',
            group: 'l2',
            active: 'inactive',

        }, {
            name: 'bcs ldn',
            email: 'bcs.ldn@gmail.com',
            group: 'l3',
            active: 'active',

        }, {
            name: 'dasd psods',
            email: 'dasd.psods@gmail.com',
            group: 'admin',
            active: 'active',

        }, {
            name: 'abc lmn',
            email: 'abc.pqr@gmail.com',
            group: 'l1',
            active: 'active',

        }, {
            name: 'zxy dsa',
            email: 'zxy.dsa@gmail.com',
            group: 'l2',
            active: 'inactive',

        }, {
            name: 'bcs ldn',
            email: 'bcs.ldn@gmail.com',
            group: 'l3',
            active: 'active',

        }, {
            name: 'dasd psods',
            email: 'dasd.psods@gmail.com',
            group: 'admin',
            active: 'active',

        }, {
            name: 'abc lmn',
            email: 'abc.pqr@gmail.com',
            group: 'l1',
            active: 'active',

        }, {
            name: 'zxy dsa',
            email: 'zxy.dsa@gmail.com',
            group: 'l2',
            active: 'inactive',

        }, {
            name: 'bcs ldn',
            email: 'bcs.ldn@gmail.com',
            group: 'l3',
            active: 'active',

        }, {
            name: 'dasd psods',
            email: 'dasd.psods@gmail.com',
            group: 'admin',
            active: 'active',

        }, {
            name: 'abc lmn',
            email: 'abc.pqr@gmail.com',
            group: 'l1',
            active: 'active',

        }, {
            name: 'zxy dsa',
            email: 'zxy.dsa@gmail.com',
            group: 'l2',
            active: 'inactive',

        }, {
            name: 'bcs ldn',
            email: 'bcs.ldn@gmail.com',
            group: 'l3',
            active: 'active',

        }, {
            name: 'dasd psods',
            email: 'dasd.psods@gmail.com',
            group: 'admin',
            active: 'active',

        }, {
            name: 'abc lmn',
            email: 'abc.pqr@gmail.com',
            group: 'l1',
            active: 'active',

        }, {
            name: 'zxy dsa',
            email: 'zxy.dsa@gmail.com',
            group: 'l2',
            active: 'inactive',

        }, {
            name: 'bcs ldn',
            email: 'bcs.ldn@gmail.com',
            group: 'l3',
            active: 'active',

        }, {
            name: 'dasd psods',
            email: 'dasd.psods@gmail.com',
            group: 'admin',
            active: 'active',

        }, {
            name: 'abc lmn',
            email: 'abc.pqr@gmail.com',
            group: 'l1',
            active: 'active',

        }, {
            name: 'zxy dsa',
            email: 'zxy.dsa@gmail.com',
            group: 'l2',
            active: 'inactive',

        }, {
            name: 'bcs ldn',
            email: 'bcs.ldn@gmail.com',
            group: 'l3',
            active: 'active',

        }, {
            name: 'dasd psods',
            email: 'dasd.psods@gmail.com',
            group: 'admin',
            active: 'active',

        }, {
            name: 'abc lmn',
            email: 'abc.pqr@gmail.com',
            group: 'l1',
            active: 'active',

        }, {
            name: 'zxy dsa',
            email: 'zxy.dsa@gmail.com',
            group: 'l2',
            active: 'inactive',

        }, {
            name: 'bcs ldn',
            email: 'bcs.ldn@gmail.com',
            group: 'l3',
            active: 'active',

        }, {
            name: 'dasd psods',
            email: 'dasd.psods@gmail.com',
            group: 'admin',
            active: 'active',

        }, {
            name: 'abc lmn',
            email: 'abc.pqr@gmail.com',
            group: 'l1',
            active: 'active',

        }, {
            name: 'zxy dsa',
            email: 'zxy.dsa@gmail.com',
            group: 'l2',
            active: 'inactive',

        }, {
            name: 'bcs ldn',
            email: 'bcs.ldn@gmail.com',
            group: 'l3',
            active: 'active',

        }, {
            name: 'dasd psods',
            email: 'dasd.psods@gmail.com',
            group: 'admin',
            active: 'active',

        }, {
            name: 'abc lmn',
            email: 'abc.pqr@gmail.com',
            group: 'l1',
            active: 'active',

        }, {
            name: 'zxy dsa',
            email: 'zxy.dsa@gmail.com',
            group: 'l2',
            active: 'inactive',

        }, {
            name: 'bcs ldn',
            email: 'bcs.ldn@gmail.com',
            group: 'l3',
            active: 'active',

        }, {
            name: 'dasd psods',
            email: 'dasd.psods@gmail.com',
            group: 'admin',
            active: 'active',

        }, {
            name: 'abc lmn',
            email: 'abc.pqr@gmail.com',
            group: 'l1',
            active: 'active',

        }, {
            name: 'zxy dsa',
            email: 'zxy.dsa@gmail.com',
            group: 'l2',
            active: 'inactive',

        }, {
            name: 'bcs ldn',
            email: 'bcs.ldn@gmail.com',
            group: 'l3',
            active: 'active',

        }, {
            name: 'dasd psods',
            email: 'dasd.psods@gmail.com',
            group: 'admin',
            active: 'active',

        }, {
            name: 'abc lmn',
            email: 'abc.pqr@gmail.com',
            group: 'l1',
            active: 'active',

        }, {
            name: 'zxy dsa',
            email: 'zxy.dsa@gmail.com',
            group: 'l2',
            active: 'inactive',

        }, {
            name: 'bcs ldn',
            email: 'bcs.ldn@gmail.com',
            group: 'l3',
            active: 'active',

        }, {
            name: 'dasd psods',
            email: 'dasd.psods@gmail.com',
            group: 'admin',
            active: 'active',

        }, {
            name: 'abc lmn',
            email: 'abc.pqr@gmail.com',
            group: 'l1',
            active: 'active',

        }, {
            name: 'zxy dsa',
            email: 'zxy.dsa@gmail.com',
            group: 'l2',
            active: 'inactive',

        }, {
            name: 'bcs ldn',
            email: 'bcs.ldn@gmail.com',
            group: 'l3',
            active: 'active',

        }, {
            name: 'dasd psods',
            email: 'dasd.psods@gmail.com',
            group: 'admin',
            active: 'active',

        }, {
            name: 'abc lmn',
            email: 'abc.pqr@gmail.com',
            group: 'l1',
            active: 'active',

        }, {
            name: 'zxy dsa',
            email: 'zxy.dsa@gmail.com',
            group: 'l2',
            active: 'inactive',

        }, {
            name: 'bcs ldn',
            email: 'bcs.ldn@gmail.com',
            group: 'l3',
            active: 'active',

        }, {
            name: 'dasd psods',
            email: 'dasd.psods@gmail.com',
            group: 'admin',
            active: 'active',

        }, {
            name: 'abc lmn',
            email: 'abc.pqr@gmail.com',
            group: 'l1',
            active: 'active',

        }, {
            name: 'zxy dsa',
            email: 'zxy.dsa@gmail.com',
            group: 'l2',
            active: 'inactive',

        }, {
            name: 'bcs ldn',
            email: 'bcs.ldn@gmail.com',
            group: 'l3',
            active: 'active',

        }, {
            name: 'dasd psods',
            email: 'dasd.psods@gmail.com',
            group: 'admin',
            active: 'active',

        }, {
            name: 'abc lmn',
            email: 'abc.pqr@gmail.com',
            group: 'l1',
            active: 'active',

        }, {
            name: 'zxy dsa',
            email: 'zxy.dsa@gmail.com',
            group: 'l2',
            active: 'inactive',

        }, {
            name: 'bcs ldn',
            email: 'bcs.ldn@gmail.com',
            group: 'l3',
            active: 'active',

        }, {
            name: 'dasd psods',
            email: 'dasd.psods@gmail.com',
            group: 'admin',
            active: 'active',

        }, {
            name: 'abc lmn',
            email: 'abc.pqr@gmail.com',
            group: 'l1',
            active: 'active',

        }, {
            name: 'zxy dsa',
            email: 'zxy.dsa@gmail.com',
            group: 'l2',
            active: 'inactive',

        }, {
            name: 'bcs ldn',
            email: 'bcs.ldn@gmail.com',
            group: 'l3',
            active: 'active',

        }, {
            name: 'dasd psods',
            email: 'dasd.psods@gmail.com',
            group: 'admin',
            active: 'active',

        }, {
            name: 'abc lmn',
            email: 'abc.pqr@gmail.com',
            group: 'l1',
            active: 'active',

        }, {
            name: 'zxy dsa',
            email: 'zxy.dsa@gmail.com',
            group: 'l2',
            active: 'inactive',

        }, {
            name: 'bcs ldn',
            email: 'bcs.ldn@gmail.com',
            group: 'l3',
            active: 'active',

        }, {
            name: 'dasd psods',
            email: 'dasd.psods@gmail.com',
            group: 'admin',
            active: 'active',

        }, {
            name: 'abc lmn',
            email: 'abc.pqr@gmail.com',
            group: 'l1',
            active: 'active',

        }, {
            name: 'zxy dsa',
            email: 'zxy.dsa@gmail.com',
            group: 'l2',
            active: 'inactive',

        }, {
            name: 'bcs ldn',
            email: 'bcs.ldn@gmail.com',
            group: 'l3',
            active: 'active',

        }, {
            name: 'dasd psods',
            email: 'dasd.psods@gmail.com',
            group: 'admin',
            active: 'active',

        }, {
            name: 'abc lmn',
            email: 'abc.pqr@gmail.com',
            group: 'l1',
            active: 'active',

        }, {
            name: 'zxy dsa',
            email: 'zxy.dsa@gmail.com',
            group: 'l2',
            active: 'inactive',

        }, {
            name: 'bcs ldn',
            email: 'bcs.ldn@gmail.com',
            group: 'l3',
            active: 'active',

        }, {
            name: 'dasd psods',
            email: 'dasd.psods@gmail.com',
            group: 'admin',
            active: 'active',

        }, {
            name: 'abc lmn',
            email: 'abc.pqr@gmail.com',
            group: 'l1',
            active: 'active',

        }, {
            name: 'zxy dsa',
            email: 'zxy.dsa@gmail.com',
            group: 'l2',
            active: 'inactive',

        }, {
            name: 'bcs ldn',
            email: 'bcs.ldn@gmail.com',
            group: 'l3',
            active: 'active',

        }, {
            name: 'dasd psods',
            email: 'dasd.psods@gmail.com',
            group: 'admin',
            active: 'active',

        }, {
            name: 'abc lmn',
            email: 'abc.pqr@gmail.com',
            group: 'l1',
            active: 'active',

        }, {
            name: 'zxy dsa',
            email: 'zxy.dsa@gmail.com',
            group: 'l2',
            active: 'inactive',

        }, {
            name: 'bcs ldn',
            email: 'bcs.ldn@gmail.com',
            group: 'l3',
            active: 'active',

        }, {
            name: 'dasd psods',
            email: 'dasd.psods@gmail.com',
            group: 'admin',
            active: 'active',

        }, {
            name: 'abc lmn',
            email: 'abc.pqr@gmail.com',
            group: 'l1',
            active: 'active',

        }, {
            name: 'zxy dsa',
            email: 'zxy.dsa@gmail.com',
            group: 'l2',
            active: 'inactive',

        }, {
            name: 'bcs ldn',
            email: 'bcs.ldn@gmail.com',
            group: 'l3',
            active: 'active',

        }, {
            name: 'dasd psods',
            email: 'dasd.psods@gmail.com',
            group: 'admin',
            active: 'active',

        }, {
            name: 'abc lmn',
            email: 'abc.pqr@gmail.com',
            group: 'l1',
            active: 'active',

        }, {
            name: 'zxy dsa',
            email: 'zxy.dsa@gmail.com',
            group: 'l2',
            active: 'inactive',

        }, {
            name: 'bcs ldn',
            email: 'bcs.ldn@gmail.com',
            group: 'l3',
            active: 'active',

        }, {
            name: 'dasd psods',
            email: 'dasd.psods@gmail.com',
            group: 'admin',
            active: 'active',

        }, {
            name: 'abc lmn',
            email: 'abc.pqr@gmail.com',
            group: 'l1',
            active: 'active',

        }, {
            name: 'zxy dsa',
            email: 'zxy.dsa@gmail.com',
            group: 'l2',
            active: 'inactive',

        }, {
            name: 'bcs ldn',
            email: 'bcs.ldn@gmail.com',
            group: 'l3',
            active: 'active',

        }, {
            name: 'dasd psods',
            email: 'dasd.psods@gmail.com',
            group: 'admin',
            active: 'active',

        }, {
            name: 'abc lmn',
            email: 'abc.pqr@gmail.com',
            group: 'l1',
            active: 'active',

        }, {
            name: 'zxy dsa',
            email: 'zxy.dsa@gmail.com',
            group: 'l2',
            active: 'inactive',

        }, {
            name: 'bcs ldn',
            email: 'bcs.ldn@gmail.com',
            group: 'l3',
            active: 'active',

        }, {
            name: 'dasd psods',
            email: 'dasd.psods@gmail.com',
            group: 'admin',
            active: 'active',

        }, {
            name: 'abc lmn',
            email: 'abc.pqr@gmail.com',
            group: 'l1',
            active: 'active',

        }, {
            name: 'zxy dsa',
            email: 'zxy.dsa@gmail.com',
            group: 'l2',
            active: 'inactive',

        }, {
            name: 'bcs ldn',
            email: 'bcs.ldn@gmail.com',
            group: 'l3',
            active: 'active',

        }, {
            name: 'dasd psods',
            email: 'dasd.psods@gmail.com',
            group: 'admin',
            active: 'active',

        }, {
            name: 'abc lmn',
            email: 'abc.pqr@gmail.com',
            group: 'l1',
            active: 'active',

        }, {
            name: 'zxy dsa',
            email: 'zxy.dsa@gmail.com',
            group: 'l2',
            active: 'inactive',

        }, {
            name: 'bcs ldn',
            email: 'bcs.ldn@gmail.com',
            group: 'l3',
            active: 'active',

        }, {
            name: 'dasd psods',
            email: 'dasd.psods@gmail.com',
            group: 'admin',
            active: 'active',

        }, {
            name: 'abc lmn',
            email: 'abc.pqr@gmail.com',
            group: 'l1',
            active: 'active',

        }, {
            name: 'zxy dsa',
            email: 'zxy.dsa@gmail.com',
            group: 'l2',
            active: 'inactive',

        }, {
            name: 'bcs ldn',
            email: 'bcs.ldn@gmail.com',
            group: 'l3',
            active: 'active',

        }, {
            name: 'dasd psods',
            email: 'dasd.psods@gmail.com',
            group: 'admin',
            active: 'active',

        }];*/

    }
}
