(function () {
    'use strict';

    angular
        .module('vk')
        .controller('myExperienceController', myExperienceController);

    /** @ngInject */
    myExperienceController.$inject = ['$location', 'MyService', '$localStorage', "lodash"];

    function myExperienceController($location, MyService, $localStorage, lodash) {
        var cardId = $localStorage.cardId;
        var storeId = $localStorage.storeId;
        var token = $localStorage.token;
        var vm = this;

        (function () {
            MyService.getMyExperienceDetail(cardId, storeId, token).then(function (data) {
                if (data.code != 200) {
                    return
                }
                //由于无法确定服务端到底会在什么时候返回+,-,所以干脆自己来~
                lodash.each(data.data, function (each) {
                    if (each.experience > 0) {
                        each.experience = "+" + each.experience;
                    }else if(each.experience < 0){
                        each.experience = "-" + Math.abs(each.experience);
                    }else{
                        each.experience = 0;
                    }
                });
                vm.myExperience = data.data;
            }, function (e) {
                //error msg
            });
        })();
    }
})();
