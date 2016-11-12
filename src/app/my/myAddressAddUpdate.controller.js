(function () {
    'use strict';

    angular
        .module('vk')
        .controller('myAddressAddUpdateController', myAddressAddUpdateController);

    /** @ngInject */
    myAddressAddUpdateController.$inject = ['$location', 'MyService', '$localStorage', "lodash"];

    function myAddressAddUpdateController($location, MyService, $localStorage, lodash) {
        var cardId = $localStorage.cardId;
        var token = $localStorage.token;
        var vm = this;

        vm.title = "添加地址";
        var update = $location.search();
        vm.addressId = update.addressId;
        if (update.title) {
            vm.title = update.title
        }
        if (update.name) {
            vm.name = update.name
        }
        if (update.mobile) {
            vm.mobile = lodash.parseInt(update.mobile);
        }
        if (update.city) {
            vm.city = update.city
        }
        if (update.address) {
            vm.address = update.address
        }
        if (update.default == 1) {
            vm.default = true
        }

        vm.onSaveClick = onSaveClick;
        vm.onGoBackClick = onGoBackClick;

        function onGoBackClick() {
            $location.url("/myAddressList");
        }

        function onSaveClick() {
            if (!vm.name || !vm.mobile || !vm.address) {
                alert("还有信息未填写");
                return
            }
            vm.isDefault = 0;
            if (vm.default) {
                vm.isDefault = 1;
            }

            if(vm.title === "修改地址"){
                MyService.updateMyAddress(cardId, token, vm).then(function (data) {
                    if (data.code != 200) {
                        alert(data.message);
                        return
                    }
                    onGoBackClick();
                }, function (e) {
                    //error msg
                });
            }else if(vm.title === "添加地址"){
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

    }
})();
