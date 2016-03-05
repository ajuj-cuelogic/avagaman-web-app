'use strict';

angular.module('historyService', ['providers'])
    .service('historyService', ['$http', 'config', historyService]);

function historyService($http, config) {

    var historyService = {
        getUserPeriviousHistory: getUserPeriviousHistory,
    };

    return historyService;

    function getUserPeriviousHistory() {

        return [{
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

                },
                {
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

                },{
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

                },{
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

                },{
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

                }
                ,{
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

                },{
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

                },{
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

                },
                {
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

                },
                {
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

                },{
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

                },{
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

                },{
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

                }
                ,{
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

                },{
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

                },{
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

                },{
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

                },
                {
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

                },{
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

                },{
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

                },{
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

                }
                ,{
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

                },{
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

                },{
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

                },{
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

                },
                {
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

                },{
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

                },{
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

                },{
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

                }
                ,{
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

                },{
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

                },{
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

                }
            ];
        // return $http({
        //     method: "GET",
        //     url: config.apiEndPoint + '', // Concat api for fetching admin user list
        // });
    }
}
