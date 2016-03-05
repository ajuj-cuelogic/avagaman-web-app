'use strict';

angular.module('localStorageService', [])
    .service('localStorageService', [localStorageService]);

function localStorageService(localStorageService) {

    var service = {
        set: set,
        get: get,
        remove: remove,
        clearAll: clearAll
    };

    return service;

    function set(key,value) {
        window.localStorage.setItem(key,value);
    }

    function get(key) {
        return window.localStorage.getItem(key);
    }

    function remove(key) {
        window.localStorage.removeItem(key);
    }

    function clearAll() {
        window.localStorage.clear();
    }

};
