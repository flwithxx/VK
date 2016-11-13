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

        function popUp() {

        }

        function goChangePwd() {
            $location.url("/myChengePwd");
        }

    }
})();
