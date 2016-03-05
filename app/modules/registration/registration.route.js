'use strict';

angular
    .module('registration')
    .config(['$stateProvider', stateProvider]);

function stateProvider($stateProvider) {

    $stateProvider
        .state('registration', {
            url: '/registration',
            views: {
                '@': {
                    controller: 'RegistrationCtrl',
                    templateUrl: 'app/modules/registration/views/registration.html'
                }
            }
        })
}