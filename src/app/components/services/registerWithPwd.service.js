/**
 * Created by ganyang on 16/11/11.
 */

(function () {
    'use strict';

    angular
        .module('vk')
        .factory('RegisterWithPwdService', RegisterWithPwdService);

    RegisterWithPwdService.$inject = ['$http', '$q', 'restUrl'];

    function RegisterWithPwdService($http, $q, restUrl) {
        return {
            register: register
        };

        function register(mobile, vcode, pwd) {
            return $http({
                method: 'POST',
                url: restUrl + 'card',
                data: {
                    mobile: mobile,
                    sms: vcode,
                    password: pwd
                },
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
