(function () {
    'use strict';

    angular
        .module('vk')
        .controller('TabbarController', TabbarController);

    TabbarController.$inject = ['$location'];

    /** @ngInject */
    function TabbarController($location) {
        var vm = this;

        vm.active =($location.path()).substr(1);
        vm.goShopping = goShopping;
        vm.goCheep = goCheep;
        vm.goMy = goMy;

        function goShopping(name){
            vm.active = name;
            $location.url('/shopping');
        }

        function goCheep(name){
            vm.active = name;
            $location.url('/pointShop');
        }

        function goMy(name){
            vm.active = name;
            $location.url('/my');
        }
    }
})();
