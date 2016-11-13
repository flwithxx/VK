(function () {
    'use strict';

    angular
        .module('vk')
        .controller('myChengePwdController', myChengePwdController);

    /** @ngInject */
    myChengePwdController.$inject = ['$location', 'MyService', '$localStorage', "lodash"];

    function myChengePwdController($location, MyService, $localStorage, lodash) {
        var cardId = $localStorage.cardId;
        var token = $localStorage.token;
        var vm = this;
        vm.submit = submit;

        function onGoBackClick() {
            $location.url("/myAcountSetting");
        }

        function submit() {
            if (!vm.newPwd || !vm.oldPwd) {
                alert("还有信息未填写");
                return
            }
                MyService.changeMyPwd(cardId, token, vm).then(function (data) {
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
