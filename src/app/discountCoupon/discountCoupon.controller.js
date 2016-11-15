(function () {
    'use strict';

    angular
        .module('vk')
        .controller('DiscountCouponController', DiscountCouponController);

    DiscountCouponController.$inject = ['$location', '$localStorage', 'lodash', 'MyService'];

    /** @ngInject */
    function DiscountCouponController($location, $localStorage, lodash, MyService) {
        var vm = this;

        var lists;
        vm.active = 'one';
        vm.switchTab = switchTab;
        vm.goBack = goBack;
        MyService.getDiscountCouponList($localStorage.cardId, $localStorage.token, $localStorage.openId).then(function (res) {
            lists = res.data;
            // lists[2].type = 0;
            // lists[4].ticketType = 1;
            // lists[3].type = 3;
            vm.switchTab('one');
        });


        function switchTab(tab) {
            vm.active = tab;
            //filter data
            if (tab === 'one') {
                vm.list = lodash.filter(lists, {type: 1});
            } else if (tab === 'two') {
                vm.list = lodash.filter(lists, {type: 0});
            } else {
                //TODO unkown expired data
                vm.list = lodash.filter(lists, {type: 3});
            }
        }

        function goBack() {
            $location.url('/my');
        }
    }
})();
