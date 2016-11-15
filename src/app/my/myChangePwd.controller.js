(function () {
    'use strict';

    angular
        .module('vk')
        .controller('myChangePwdController', myChangePwdController);

    /** @ngInject */
    myChangePwdController.$inject = ['$location', 'MyService', '$localStorage', "lodash"];

    function myChangePwdController($location, MyService, $localStorage, lodash) {
        var cardId = $localStorage.cardId;
        var token = $localStorage.token;
        var vm = this;
        vm.submit = submit;
        vm.goBack = goBack;

        function goBack() {
            $location.url("/my");
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
