/**
 * Created by ganyang on 16/11/11.
 */

(function () {
    'use strict';

    angular
        .module('vk')
        .factory('RegisterWithPwdService', RegisterWithPwdService);

    RegisterWithPwdService.$inject = ['$http', '$q', 'restUrlV2'];

    function RegisterWithPwdService($http, $q, restUrlV2) {
        return {
            register: register
        };

        function register(storeId, param) {
            return $http({
                method: 'POST',
                url: restUrlV2 + 'card',
                data: {
                    storeId: storeId,
                    mobile: param.mobile,
                    sms: param.vcode,
                    password: param.pwd
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
