'use strict';

// Declare app level module which depends on views, and components
angular
    .module('angularClient', [
        'ui.router',
        'ngAnimate',
        'ngLodash',
        'ngTable',
        'login',
    ]) .config(['$urlRouterProvider', urlRouterProvider])
    .run(['$rootScope', '$state', 'localStorageService', 'Permissions']);

    function urlRouterProvider($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/login');
}
    
