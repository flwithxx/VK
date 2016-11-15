/**
 * Created by wenpeng.guo on 11/10/16.
 */
(function () {
    'use strict';

    angular
        .module('vk')
        .factory('ApiService', ApiService);

    ApiService.$inject = ['$http', '$q', 'restUrlV2'];

    function ApiService($http, $q, restUrlV2) {
        return {
            getOrderList: getOrderList
        };

        function getOrderList(cardId, token, openId, storeId, orderType) {
            return $http({
                method: 'GET',
                url: restUrlV2 + 'orders/getOrdersByOpenId/' + openId + '/' + storeId + '/' + orderType + '/0/99',
                dataType: "json",
                headers: {
                    cardId: cardId,
                    token: token
                }
            }).then(completed).catch(failed);
        }

        function completed(response) {
            return response.data;
        }

        function failed(e) {
            return $q.reject(e);
        }
    }
})();