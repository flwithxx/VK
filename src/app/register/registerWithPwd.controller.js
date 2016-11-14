/**
 * Created by ganyang on 16/11/11.
 */
(function () {
    'use strict';

    angular
        .module('vk')
        .controller('RegisterWithPwdController', RegisterWithPwdController);

    /** @ngInject */
    RegisterWithPwdController.$inject = ['$location', '$localStorage', 'RegisterWithPwdService'];

    function RegisterWithPwdController($location, $localStorage, RegisterWithPwdService) {
        var storeId = $localStorage.storeId;
        var param = $location.search();
        var vm = this;

        vm.submit = submit;

        function submit() {
            if (!vm.pwd || (vm.pwd != vm.rePwd)) {
                alert("密码不一致");
                return
            }
            param.pwd = vm.pwd;
            RegisterWithPwdService.register(storeId, param).then(function (data) {
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
