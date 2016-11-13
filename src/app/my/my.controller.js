(function () {
    'use strict';

    angular
        .module('vk')
        .controller('MyController', MyController);

    MyController.$inject = ['$localStorage', '$location', 'JsBarcode'];

    /** @ngInject */
    function MyController($localStorage, $location, JsBarcode) {
        var vm = this;

        vm.balance = $localStorage.balance || 0;
        vm.point = $localStorage.point || 0;
        vm.ticketsCount = $localStorage.ticketsCount || 0;
        vm.name = $localStorage.memberName || '测试姓名';
        vm.cardType = $localStorage.cardType || '普通卡';
        vm.cardId = $localStorage.cardId || '32685821525213878828';
        vm.goDetailPage = goDetailPage;

        JsBarcode("#barcode")
            .CODE128C(vm.cardId, {fontSize: 12, textMargin: 0, fontWeight: 500})
            .render();

        function goDetailPage(url) {
            $location.url(url);
        }
    }
})();
