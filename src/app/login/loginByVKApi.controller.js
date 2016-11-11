(function () {
    'use strict';

    angular
        .module('vk')
        .controller('LoginByVKApiController', LoginByVKApiController);

    LoginByVKApiController.$inject = ['$location', 'LoginService'];

    /** @ngInject */
    function LoginByVKApiController($location, LoginService) {
        var vm = this;

        vm.login = login;
        vm.goRegister = goRegister;
        vm.forgetPwd = forgetPwd;

        function login() {
            // var params = {"mobile": "134", "password": "111111", "storeId": "231"};
            var params = {"mobile": vm.username, "password": vm.pwd, "storeId": "231"};
            LoginService.loginByVKApi(params).then(function (data) {
                console.log(data)
            }, function (e) {
                //error msg
            });
        }

        function goRegister() {
            $location.url('/register');
        }

        function forgetPwd(){
            $location.url('/forgetPwd')
        }
    }
})();
