/**
 * Created by ganyang on 16/11/11.
 */

(function () {
    'use strict';

    angular
        .module('vk')
        .factory('ForgetPwdService', ForgetPwdService);

    ForgetPwdService.$inject = ['$http', '$q', 'restUrl'];

    function ForgetPwdService($http, $q, appUrl) {
        return {
            getVcode: getVcode,
            updatePwd: updatePwd
        };

        function getVcode(mobile) {
            return $http({
                method: 'GET',
                url: appUrl + 'sms_pasword/by/' + mobile,
                dataType: "json"
            }).then(completed).catch(failed);
        }

        function updatePwd(params) {
            return $http({
                method: 'POST',
                url: restUrl + 'xxxxx',
                data: {
                    mobile:params.mobile,
                    sms:params.vcode,
                    password:params.pwd
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
