(function () {
    'use strict';

    angular
        .module('vk')
        .controller('myAcountSettingController', myAcountSettingController);

    /** @ngInject */
    myAcountSettingController.$inject = ['$location'];

    function myAcountSettingController($location) {
        var vm = this;

        vm.goChangePwd = goChangePwd;
        vm.popUp = popUp;
        vm.goBack = goBack;
        function goBack() {
            $location.url('/my');
        }

        function popUp() {

        }

        function goChangePwd() {
            $location.url("/myChengePwd");
        }

    }
})();
