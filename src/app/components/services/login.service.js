/**
 * Created by wenpeng.guo on 11/10/16.
 */
(function () {
    'use strict';

    angular
        .module('vk')
        .factory('LoginService', LoginService);

    LoginService.$inject = ['$http', '$q', 'restUrl'];

    function LoginService($http, $q, restUrl) {
        return {
            loginByWeChat: loginByWeChat,
            loginByVKApi: loginByVKApi,
            logout:logout
        };

        function logout() {

        }
        function loginByWeChat(id) {
            return $http({
                method: 'GET',
                url: restUrl + 'test1/' + id,
                dataType: "json"
            }).then(completed).catch(failed);
        }

        function loginByVKApi(params) {
            return $http({
                method: 'POST',
                url: restUrl + 'card/activateToken',
                data: params,
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
