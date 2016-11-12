(function () {
    'use strict';

    angular
        .module('vk')
        .controller('ShoppingController', ShoppingController);

    ShoppingController.$inject = ['$localStorage'];

    /** @ngInject */
    function ShoppingController($localStorage) {
        var vm = this;

        console.log($localStorage)

    }
})();
