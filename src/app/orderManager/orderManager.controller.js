(function () {
    'use strict';

    angular
        .module('vk')
        .controller('OrderManagerController', OrderManagerController);

    OrderManagerController.$inject = ['$location', '$localStorage', 'ApiService'];

    /** @ngInject */
    function OrderManagerController($location, $localStorage, ApiService) {
        var vm = this;

        vm.active = 'one';
        vm.switchTab = switchTab;
        vm.goBack = goBack;
        getOrderList(1);


        function switchTab(tab) {
            vm.active = tab;
            //filter data
            if (tab === 'one') {
                getOrderList(1);
            } else if (tab === 'two') {
                getOrderList(0);
            }
        }

        function goBack() {
            $location.url('/my');
        }

        function getOrderList(orderType) {
            ApiService.getOrderList($localStorage.cardId, $localStorage.token, $localStorage.openId, $localStorage.storeId, orderType).then(function (res) {
                // vm.list = res.data;
                vm.list = [1,2,3,4,5];
            });
        }

    }
})();
