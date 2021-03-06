(function () {
    'use strict';

    angular
        .module('vk')
        .controller('LoginByVKApiController', LoginByVKApiController);

    LoginByVKApiController.$inject = ['$location', 'LoginService', 'LocalStorageService', '$localStorage'];

    /** @ngInject */
    function LoginByVKApiController($location, LoginService, LocalStorageService, $localStorage) {
        var data = $location.search();

        if (data.storeId) {
            LocalStorageService.setOneLocalStorage("storeId", data.storeId);
        }
        if (!$localStorage.storeId) {
            alert("店铺id不能为空,其他操作已被禁止");
            return
        }

        var vm = this;

        vm.login = login;
        vm.goRegister = goRegister;
        vm.forgetPwd = forgetPwd;

        function login() {
            var params = {"mobile": vm.username, "password": vm.pwd, "storeId": "231"};
            LoginService.loginByVKApi(params).then(function (res) {
                LocalStorageService.setAllLocalStorage(res);
                $location.url('/shopping');
            }, function (e) {
                //TODO
            });
        }

        function goRegister() {
            $location.url('/register');
        }

        function forgetPwd() {
            $location.url('/forgetPwd')
        }
    }
})();
