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
        'registration'
    ]) .config(['$urlRouterProvider','$stateProvider', urlRouterProvider]);

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

