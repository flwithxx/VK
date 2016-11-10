(function () {
    'use strict';

    angular
        .module('vk')
        .controller('LoginByVKApiController', LoginByVKApiController);

    LoginByVKApiController.$inject = ['LoginService'];

    /** @ngInject */
    function LoginByVKApiController(LoginService) {
        var vm = this;

        vm.login = login;

        function login() {
            var params = {"mobile": "134", "password": "111111", "storeId": "231"};
            LoginService.loginByVKApi(params).then(function (data) {
                console.log(data)
            }, function (e) {

            });
        }
    }
})();
