(function () {
    'use strict';

    angular
        .module('vk')
        .controller('MemberInfoController', MemberInfoController);

    /** @ngInject */
    MemberInfoController.$inject = ['$location', '$localStorage'];

    function MemberInfoController($location, $localStorage) {
        var vm = this;
        vm.memberName = $localStorage.memberName;
        vm.memberGender = $localStorage.sex;
        vm.memberBirthday = $localStorage.birthday;
        vm.memberCardNo = $localStorage.idCard;
        vm.createdDate = $localStorage.created;
        vm.createdLocation = $localStorage.storeName;
        vm.memberLevel = $localStorage.levelName;
        vm.goLevelDeatil = goLevelDetail;
        vm.goBack = goBack;

        function goLevelDetail() {
            $location.url("/memberLevelDetail");
        }

        function goBack() {
            $location.url('/my');
        }
    }
})();
