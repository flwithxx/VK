/**
 * Created by ganyang on 16/11/12.
 */

(function () {
    'use strict';

    angular
        .module('vk')
        .factory('MyService', MyService);

    MyService.$inject = ['$http', '$q', 'restUrl', 'restUrlV2'];

    function MyService($http, $q, restUrl, restUrlV2) {
        return {
            getMemberLevelDetail: getMemberLevelDetail,
            getMyExperienceDetail: getMyExperienceDetail,
            getMyAddressList: getMyAddressList,
            addMyAddress: addMyAddress,
            updateMyAddress: updateMyAddress,
            deleteMyAddress: deleteMyAddress,
            postMyFeedback: postMyFeedback,
        };

        function postMyFeedback(cardId, storeId, token, param) {
            return $http({
                method: 'POST',
                url: restUrl + 'feedback',
                headers: {
                    cardId: cardId,
                    token: token
                },
                data: {
                    storeId: storeId,
                    content: param.feedback,
                    source: "微商城v2"
                },
                dataType: "json"
            }).then(completed).catch(failed);
        }

        function deleteMyAddress(cardId, token, param) {
            return $http({
                method: 'DELETE',
                url: restUrlV2 + 'address/' + param.addressId,
                headers: {
                    cardId: cardId,
                    token: token
                },
                dataType: "json"
            }).then(completed).catch(failed);
        }

        function updateMyAddress(cardId, token, param) {
            return $http({
                method: 'PUT',
                url: restUrlV2 + 'address',
                headers: {
                    cardId: cardId,
                    token: token
                },
                data: {
                    id: param.addressId,
                    address: param.address,
                    city: param.city,
                    mobile: param.mobile,
                    isDefault: param.isDefault,
                    name: param.name
                },
                dataType: "json"
            }).then(completed).catch(failed);
        }

        function addMyAddress(cardId, token, param) {
            return $http({
                method: 'POST',
                url: restUrlV2 + 'address',
                headers: {
                    cardId: cardId,
                    token: token
                },
                data: {
                    cardId: cardId,
                    address: param.address,
                    city: param.city,
                    mobile: param.mobile,
                    isDefault: param.isDefault,
                    name: param.name
                },
                dataType: "json"
            }).then(completed).catch(failed);
        }

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

        function getMyExperienceDetail(cardId, storeId, token) {
            return $http({
                method: 'GET',
                url: restUrl + 'card/explog/' + cardId + '/' + storeId + '/0/99',
                dataType: "json",
                headers: {
                    cardId: cardId,
                    token: token
                }
            }).then(completed).catch(failed);
        }

        function getMyAddressList(cardId, token) {
            return $http({
                method: 'GET',
                url: restUrlV2 + 'address/by/' + cardId + '/0/99',
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
