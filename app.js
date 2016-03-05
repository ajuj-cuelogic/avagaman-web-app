'use strict';

// Declare app level module which depends on views, and components
angular
    .module('angularClient', [
        'ui.router',
        'ngAnimate',
        'ngLodash',
        'ngTable',

        'directives',

        'login',
        'registration',  
        'dashboard',
        'history',
        'employees'

    ]).config(['$urlRouterProvider', '$stateProvider', urlRouterProvider])
    .run(['$rootScope', '$state', 'localStorageService', handleRoutingValidation]);

function urlRouterProvider($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/login');
    $stateProvider
        .state('base', {
            url: '',
            abstract: true,
            views: {
                'header': {
                    templateUrl: 'app/components/directives/views/primary-header.html',
                },
                'sidebar': {
                    templateUrl: 'app/components/directives/views/primary-sidebar.html',
                },
                'footer': {
                    templateUrl: 'app/components/directives/views/footer.html',
                },
            }
        });
}

function handleRoutingValidation($rootScope, $state, localStorageService, Permissions) {

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {

        var state = toState.name,
            fromState = fromState.name;

        if ((localStorageService.get('__t') == null) && (toState.name !== 'login') && (toState.name !== 'registration')) {
            event.preventDefault();
            $state.transitionTo('login');
        } else if (localStorageService.get('__t') && (toState.name == 'login')) {
            $state.transitionTo('base.dashboard');
        }
    });
}
