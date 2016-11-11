/**
 * Created by ganyang on 16/11/11.
 */

(function () {
    'use strict';

    angular
        .module('vk')
        .factory('RegisterService', RegisterService);

    RegisterService.$inject = ['$http', '$q', 'restUrl', 'StorageService'];

    function RegisterService($http, $q, restUrl, StorageService) {
        return {
            getVcode: getVcode
        };

        function getVcode(mobile) {
            return $http({
                method: 'GET',
                url: restUrl + 'send/' + mobile + '/identifyingCode/by/' + StorageService.get("storeId"),
                dataType: "json"
            }).then(completed).catch(failed);
        }

        function completed(response) {
            return response.data;
        }

        function failed(e) {
            return $q.reject(e);
        }
    }
})();
