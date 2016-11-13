(function () {
    'use strict';

    angular
        .module('vk')
        .controller('myRechargeController', myRechargeController);

    /** @ngInject */
    myRechargeController.$inject = ['$location', 'MyService', '$localStorage', "lodash"];

    function myRechargeController($location, MyService, $localStorage, lodash) {
        var cardId = $localStorage.cardId;
        var token = $localStorage.token;
        var vm = this;
        vm.memberName = $localStorage.memberName;
        vm.balance = $localStorage.balance;
        vm.points = $localStorage.point;
        vm.rechargeAmount=0;
        vm.onCheck = onCheck;
        vm.pay = pay;
        function onCheck(item) {
            vm.rechargeAmount = item.amount;
        }

        function pay(item) {

        }

        MyService.getRechargeList(cardId, token).then(function (data) {
            if (data.code != 200) {
                alert(data.message);
                return
            }
            lodash.each(data.data, function (each) {
                var temp = [];
                temp.push("充值" + each.amount + "元");
                if (each.give) {
                    temp.push("送" + each.give + "元");
                }
                if (each.point) {
                    temp.push("送" + each.point + "积分");
                }
                if (each.ticketNames) {
                    var yoyoyo = each.ticketNames.split(",");
                    lodash.each(yoyoyo, function (eachTicketName) {
                        temp.push("送" + eachTicketName);
                    })
                }
                each.otherInfo = temp.join(",")
            })
            vm.rechargeList = data.data;
        }, function (e) {
            //error msg
        });
    }
})();
