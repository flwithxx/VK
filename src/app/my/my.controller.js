(function () {
    'use strict';

    angular
        .module('vk')
        .controller('MyController', MyController);

    MyController.$inject = ['$localStorage', '$location'];

    /** @ngInject */
    function MyController($localStorage, $location) {
        var vm = this;

        vm.balance = $localStorage.balance || 0;
        vm.point = $localStorage.point || 0;
        vm.ticketsCount = $localStorage.ticketsCount || 0;
        vm.name = $localStorage.memberName || '测试姓名';
        vm.cardType = $localStorage.cardType || '普通卡';
        vm.cardId = $localStorage.cardId || '98712413241341234';
        vm.goDetailPage = goDetailPage;

        function goDetailPage(url) {
            $location.url(url);
        }
    }
})();
