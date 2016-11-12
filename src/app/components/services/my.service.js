/**
 * Created by ganyang on 16/11/12.
 */

(function () {
    'use strict';

    angular
        .module('vk')
        .factory('MyService', MyService);

    MyService.$inject = ['$http', '$q', 'restUrl'];

    function MyService($http, $q, restUrl ) {
        return {
            getMemberLevelDetail: getMemberLevelDetail
        };

        function getMemberLevelDetail(cardId, storeId, token) {
            return $http({
                method: 'GET',
                url: restUrl + 'card/levellist/' + cardId + '/' + storeId + '/0/99',
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
