/**
 * Created by wenpeng.guo on 11/10/16.
 */
(function () {
    'use strict';

    angular
        .module('vk')
        .factory('ApiService', ApiService);

    ApiService.$inject = ['$http', '$q', 'restUrl'];

    function ApiService($http, $q, restUrl) {
        return {
            getUserInfo: getUserInfo,
            getUserStatus: getUserStatus
        };

        function getUserInfo(id) {
            return $http({
                method: 'GET',
                url: restUrl + 'test1/' + id,
                dataType: "json"
            }).then(completed).catch(failed);
        }

        function getUserStatus(id) {
            return $http({
                method: 'GET',
                url: restUrl + 'test1/' + id,
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