(function () {
    'use strict';

    angular
        .module('vk')
        .controller('RegisterController', RegisterController);

    /** @ngInject */
    RegisterController.$inject = ['$interval', '$location', 'RegisterService'];

    function RegisterController($interval, $location, RegisterService) {
        var vCodeWait = 60;
        var vm = this;
        vm.vcodeTitle = "获取验证码";
        vm.checked = true;
        vm.getVcode = getVcode;
        vm.submit = submit;

        function getVcode() {
            if (!vm.mobile || vCodeWait) {
                return
            }
            RegisterService.getVcode(vm.mobile).then(function (data) {
                console.log(data);
                if (data.code != 200) {
                    alert(data.message);
                    return
                }
                countDown();
            }, function (e) {
                alert(e.message);
            });
        }

        function submit() {
            if (!vm.mobile || !vm.vcode || !vm.checked) {
                console.log("未录入完整");
                return
            }
            $location.url('/registerWithPwd?mobile=' + vm.mobile + '&vcode=' + vm.vcode);
        }

        function countDown() {
            var timePromise = $interval(function () {
                if (vCodeWait <= 0) {
                    $interval.cancel(timePromise);
                    timePromise = undefined;
                    vCodeWait = 60;
                    vm.vcodeTitle = "重新发送";
                    vm.vcodeCss = "";
                } else {
                    vm.vcodeTitle = "重发(" + vCodeWait + ")";
                    vCodeWait--;
                    vm.vcodeCss = "my_greyout";
                }
            }, 1000, 100);

        }


    }
})();
