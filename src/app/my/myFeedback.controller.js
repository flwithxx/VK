(function () {
    'use strict';

    angular
        .module('vk')
        .controller('myFeedbackController', myFeedbackController);

    /** @ngInject */
    myFeedbackController.$inject = ['$location', 'MyService', '$localStorage', "lodash"];

    function myFeedbackController($location, MyService, $localStorage, lodash) {
        var cardId = $localStorage.cardId;
        var token = $localStorage.token;
        var storeId = $localStorage.storeId;
        var vm = this;
        vm.maxInput = 30;
        vm.countInput = 0;
        vm.onTextChange = onTextChange;
        vm.onSubmit = onSubmit;

        function onTextChange() {
            var count = vm.feedback.split("");
            vm.countInput = count.length;
            if (count.length > vm.maxInput) {
                count.pop();
                vm.countInput = vm.maxInput;
            }
            vm.feedback = count.join("");
        }

        function onGoBackClick() {
            $location.url("/myAddressList");
        }

        function onSubmit() {
            if (!vm.feedback) {
                alert("有信息未填写");
                return
            }
            MyService.postMyFeedback(cardId, storeId, token, vm).then(function (data) {
                if (data.code != 200) {
                    alert(data.message);
                    return
                }
                vm.feedback = "";
                vm.countInput = 0;
                alert("反馈成功");
            }, function (e) {
                //error msg
            });
        }
    }
})();
