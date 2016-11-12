(function () {
    'use strict';

    angular
        .module('vk')
        .controller('myAddressAddController', myAddressAddController);

    /** @ngInject */
    myAddressAddController.$inject = ['$location', 'MyService', '$localStorage', "lodash"];

    function myAddressAddController($location, MyService, $localStorage, lodash) {
        var cardId = $localStorage.cardId;
        var token = $localStorage.token;
        var vm = this;

        vm.onSaveClick = onSaveClick;
        vm.onGoBackClick = onGoBackClick;

        function onGoBackClick() {
            $location.url("/myAddressList");
        }

        function onSaveClick() {
            if (!vm.name || !vm.mobile || !vm.address) {
                return
            }
            if (vm.default == undefined) {
                vm.default = false
            }
            vm.city="成都市";
            MyService.addMyAddress(cardId, token, vm).then(function (data) {
                if (data.code != 200) {
                    alert(data.message);
                    return
                }
                onGoBackClick();
            }, function (e) {
                //error msg
            });
        }

    }
})();
