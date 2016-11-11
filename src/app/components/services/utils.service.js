/**
 * Created by ganyang on 16/11/11.
 */
(function () {
    'use strict';

    angular
        .module('vk')
        .factory('StorageService', StorageService);

    StorageService.$inject = [];

    function StorageService() {
        return {
            set: function (key, data) {
                return window.localStorage.setItem(key, window.JSON.stringify(data));
            },
            get: function (key) {
                return window.JSON.parse(window.localStorage.getItem(key));
            },
            remove: function (key) {
                return window.localStorage.removeItem(key);
            }
        };
    }
})();
