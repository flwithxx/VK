(function () {
    'use strict';

    angular
        .module('vk')
        .controller('myAddressListController', myAddressListController);

    /** @ngInject */
    myAddressListController.$inject = ['$location', 'MyService', '$localStorage', "lodash"];

    function myAddressListController($location, MyService, $localStorage, lodash) {
        var cardId = $localStorage.cardId;
        var storeId = $localStorage.storeId;
        var token = $localStorage.token;
        var vm = this;
        vm.manage = "管理";
        (function () {
            MyService.getMyAddressList(cardId, token).then(function (data) {
                if (data.code != 200) {
                    return
                }
                vm.myAddress = data.data;
            }, function (e) {
                //error msg
            });
        })();

        vm.onManageClick = onManageClick;
        vm.addAddress = addAddress;
        vm.editAddress = editAddress;
        vm.goBack = goBack;

        function goBack() {
            $location.url("/my");
        }
        function editAddress(item) {
            $location.url("/myAddressAddUpdate?title=修改地址"
                + "&city=" + item.city
                + "&mobile=" + item.mobile
                + "&name=" + item.name
                + "&default=" + item.isDefault
                + "&addressId=" + item.id
                + "&address=" + item.address
            );
        }

        function onManageClick() {
            if (this.manage === "管理") {
                this.manage = "取消"
            } else if (this.manage === "取消") {
                this.manage = "管理"
            }
        }

        function addAddress() {
            $location.url("/myAddressAddUpdate");
        }

    }
})();
