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
            .state('pointShop', {
                url: '/pointShop',
                templateUrl: 'app/pointShop/pointShop.html',
                controller: 'PointShopController',
                controllerAs: 'ps'
            })
            .state('discountCoupon', {
                url: '/discountCoupon',
                templateUrl: 'app/discountCoupon/discountCoupon.html',
                controller: 'DiscountCouponController',
                controllerAs: 'dcc'
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
            })
            .state('myAddressList', {
                url: '/myAddressList',
                templateUrl: 'app/my/myAddressList.html',
                controller: 'myAddressListController',
                controllerAs: 'malc'
            })
            .state('myAddressAddUpdate', {
                url: '/myAddressAddUpdate',
                templateUrl: 'app/my/myAddressAddUpdate.html',
                controller: 'myAddressAddUpdateController',
                controllerAs: 'maauc'
            })
            .state('myFeedback', {
                url: '/myFeedback',
                templateUrl: 'app/my/myFeedback.html',
                controller: 'myFeedbackController',
                controllerAs: 'mfbc'
            })
            .state('myAcountSetting', {
                url: '/myAcountSetting',
                templateUrl: 'app/my/myAcountSetting.html',
                controller: 'myAcountSettingController',
                controllerAs: 'masc'
            })
            .state('myChengePwd', {
                url: '/myChengePwd',
                templateUrl: 'app/my/myChengePwd.html',
                controller: 'myChengePwdController',
                controllerAs: 'mcpc'
            })
            .state('myLogout', {
                url: '/myLogout',
                templateUrl: 'app/my/myLogout.html',
                controller: 'myLogoutController',
                controllerAs: 'mloc'
            })
            .state('myRecharge', {
                url: '/myRecharge',
                templateUrl: 'app/my/myRecharge.html',
                controller: 'myRechargeController',
                controllerAs: 'mrc'
            });

        // TODO set otherwise value to 'loginByWeChat' when production env.
        $urlRouterProvider.otherwise('/loginByVKApi');
    }

})();
