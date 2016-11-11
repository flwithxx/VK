(function () {
    'use strict';

    angular
        .module('vk')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('register', {
                url: '/register',
                templateUrl: 'app/register/register.html',
                controller: 'RegisterController',
                controllerAs: 're'
            })
            .state('registerWithPwd', {
                url: '/registerWithPwd',
                templateUrl: 'app/register/registerWithPwd.html',
                controller: 'RegisterWithPwdController',
                controllerAs: 'rep'
            })
            .state('forgetPwd', {
                url: '/forgetPwd',
                templateUrl: 'app/forgetPwd/forgetPwd.html',
                controller: 'ForgetPwdController',
                controllerAs: 'fp'
            })
            .state('loginByVKApi', {
                url: '/loginByVKApi',
                templateUrl: 'app/login/loginByVKApi.html',
                controller: 'LoginByVKApiController',
                controllerAs: 'lv'
            })
            .state('loginByWeChat', {
                url: '/loginByWeChat',
                templateUrl: 'app/login/loginByWeChat.html',
                controller: 'LoginByWeChatController',
                controllerAs: 'lw'
            });
        // TODO set otherwise value to 'loginByWeChat' when production env.
        $urlRouterProvider.otherwise('/loginByVKApi');
    }

})();
