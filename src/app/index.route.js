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
            })
            .state('shopping', {
                url: '/shopping',
                templateUrl: 'app/shopping/shopping.html',
                controller: 'ShoppingController',
                controllerAs: 'sc'
            })
            .state('cheep', {
                url: '/cheep',
                templateUrl: 'app/cheep/cheep.html',
                controller: 'CheepController',
                controllerAs: 'cc'
            })
            .state('my', {
                url: '/my',
                templateUrl: 'app/my/my.html',
                controller: 'MyController',
                controllerAs: 'mc'
            })
            .state('memberInfo', {
                url: '/memberInfo',
                templateUrl: 'app/my/memberInfo.html',
                controller: 'MemberInfoController',
                controllerAs: 'mic'
            })
            .state('memberLevelDetail', {
                url: '/memberLevelDetail',
                templateUrl: 'app/my/memberLevelDetail.html',
                controller: 'memberLevelDetailController',
                controllerAs: 'mld'
            })
            .state('myExperience', {
                url: '/myExperience',
                templateUrl: 'app/my/myExperience.html',
                controller: 'myExperienceController',
                controllerAs: 'mec'
            });

        // TODO set otherwise value to 'loginByWeChat' when production env.
        $urlRouterProvider.otherwise('/loginByVKApi');
    }

})();
