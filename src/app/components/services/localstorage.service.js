/**
 * Created by wenpeng.guo on 11/10/16.
 */
(function () {
    'use strict';

    angular
        .module('vk')
        .factory('LocalStorageService', LocalStorageService);

    LocalStorageService.$inject = ['$localStorage'];

    function LocalStorageService($localStorage) {
        return {
            setAllLocalStorage: setAllLocalStorage,
            setOneLocalStorage: setOneLocalStorage,
            removeAllLocalStorage: removeAllLocalStorage,
            removeOneLocalStorage: removeOneLocalStorage
        };

        function setAllLocalStorage(res) {
            $localStorage.cardId = res.cardId;
            $localStorage.token = res.token;
            $localStorage.storeId = res.data.storeId;
            $localStorage.openId = res.data.openId;
            $localStorage.wxCardCode = res.data.wxCardCode;


            $localStorage.memberName = res.data.name;
            $localStorage.mobile = res.data.mobile;
            $localStorage.otherMobile = res.data.otherMobile;
            $localStorage.birthday = res.data.birthday;
            $localStorage.balance = res.data.balance;
            $localStorage.point = res.data.point;
            $localStorage.sex = res.data.sex;
            $localStorage.levelName = res.data.levelName;
            $localStorage.created = res.data.created;
            $localStorage.storeName = res.data.storeName;
            $localStorage.idCard = res.data.idCard;

            // $localStorage.levelName = res.data.levelName;
            // $localStorage.levelName = res.data.levelName;
            // $localStorage.levelName = res.data.levelName;
        }

        function setOneLocalStorage(key, value) {
            $localStorage[key] = value;
        }

        function removeAllLocalStorage() {
            delete $localStorage.cardId;
            delete $localStorage.token;
            delete $localStorage.storeId;
            delete $localStorage.openId;
        }

        function removeOneLocalStorage(key) {
            delete $localStorage[key];
        }
    }
})();
