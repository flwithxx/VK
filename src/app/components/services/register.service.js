/**
 * Created by ganyang on 16/11/11.
 */

(function () {
    'use strict';

    angular
        .module('vk')
        .factory('RegisterService', RegisterService);

    RegisterService.$inject = ['$http', '$q', 'restUrl'];

    function RegisterService($http, $q, restUrl) {
        return {
            getVcode: getVcode
        };

        function getVcode(storeId, param) {
            return $http({
                method: 'GET',
                url: restUrl + 'send/' + param.mobile + '/identifyingCode/by/' + storeId,
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
