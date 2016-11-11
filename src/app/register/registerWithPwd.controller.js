/**
 * Created by ganyang on 16/11/11.
 */
(function () {
    'use strict';

    angular
        .module('vk')
        .controller('RegisterWithPwdController', RegisterWithPwdController);

    /** @ngInject */
    RegisterWithPwdController.$inject = ['$location', 'RegisterWithPwdService'];

    function RegisterWithPwdController($location, RegisterWithPwdService) {
        var param = $location.search();
        var vm = this;

        vm.submit = submit;

        function submit() {
            var mobile = param.mobile;
            var vcode = param.vcode;
            if (!vm.pwd || (vm.pwd != vm.rePwd)) {
                alert("密码不一致");
                return
            }
            RegisterWithPwdService.register(mobile, vcode, vm.pwd).then(function (data) {
                console.log(data);
                if (data.code != 200) {
                    alert(data.message);
                    return
                }

                goLogin();
            }, function (e) {
                //error msg
            });
        }

        function goLogin() {
            $location.url('/login');
        }
    }
})();
