(function () {
    'use strict';

    angular
        .module('vk')
        .controller('LoginByWeChatController', LoginByWeChatController);

    LoginByWeChatController.$inject = ['LoginService'];

    /** @ngInject */
    function LoginByWeChatController(LoginService) {
        var vm = this;

        /**
         * send request to api, if success can be go to shopping, if false go to login by api
         */
        // check user already login
        // TODO

        LoginService.loginByWeChat().then(function (data) {

        }, function (e) {

        })

    }
})();
