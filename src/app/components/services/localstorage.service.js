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
            removeOneLocalStorage:removeOneLocalStorage
        };

        function setAllLocalStorage(res){
            $localStorage.cardId = res.cardId;
            $localStorage.token = res.token;
            $localStorage.storeId = res.data.storeId;
            $localStorage.openId = res.data.openId;
        }

        function setOneLocalStorage(){

        }

        function removeAllLocalStorage(){
            delete $localStorage.cardId;
            delete $localStorage.token;
            delete $localStorage.storeId;
            delete $localStorage.openId;
        }

        function removeOneLocalStorage(){

        }
    }
})();