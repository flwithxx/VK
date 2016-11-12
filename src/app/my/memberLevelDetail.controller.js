(function () {
    'use strict';

    angular
        .module('vk')
        .controller('memberLevelDetailController', memberLevelDetailController);

    /** @ngInject */
    memberLevelDetailController.$inject = ['$location', 'MyService', '$localStorage',"lodash"];

    function memberLevelDetailController($location, MyService, $localStorage,lodash) {
        var cardId = $localStorage.cardId;
        var storeId = $localStorage.storeId;
        var token = $localStorage.token;
        var vm = this;

        (function () {
            MyService.getMemberLevelDetail(cardId, storeId, token).then(function (data) {
                if (data.code != 200) {
                    return
                }
                lodash.each(data.data,function (each) {
                    each.ticketNames = each.ticketNames.split(",")
                });
                vm.levels = data.data;
            }, function (e) {
                //error msg
            });
        })();


        vm.myExperience = myExperience;

        function myExperience() {
            $location.url("/myExperience");
        }


    }
})();
