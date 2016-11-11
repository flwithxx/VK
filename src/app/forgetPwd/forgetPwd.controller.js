(function () {
    'use strict';

    angular
        .module('vk')
        .controller('ForgetPwdController', ForgetPwdController);

    /** @ngInject */
    ForgetPwdController.$inject = ['$interval', '$location', 'ForgetPwdService'];

    function ForgetPwdController($interval, $location, ForgetPwdService) {
        var vCodeWait = 60;
        var vm = this;
        vm.vcodeTitle = "获取验证码";
        vm.getVcode = getVcode;
        vm.submit = submit;

        function getVcode() {
            if (!vm.mobile) {
                return
            }

            ForgetPwdService.getVcode(vm.mobile).then(function (data) {
                console.log(data);

                countDown();
            }, function (e) {
                //error msg
            });
        }

        function submit() {
            if(!vm.mobile || !vm.vcode || !vm.pwd || !vm.rePwd){
                console.log("未录入完整");
                return
            }
            if(vm.pwd != vm.rePwd){
                alert("密码不一致");
                return
            }
            ForgetPwdService.updatePwd(vm).then(function (data) {
                console.log(data);

                countDown();
            }, function (e) {
                //error msg
            });
        }


        function countDown() {
            var timePromise = $interval(function () {
                if (vCodeWait <= 0) {
                    $interval.cancel(timePromise);
                    timePromise = undefined;
                    vCodeWait = 60;
                    vm.vcodeTitle = "重新发送";
                } else {
                    vm.vcodeTitle = "重发(" + vCodeWait + ")";
                    vCodeWait--;
                }
            }, 1000, 100);

        }

        // function goRegister() {
        //     $location.url('/register');
        // }
    }
})();
