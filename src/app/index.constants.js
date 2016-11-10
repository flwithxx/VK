/* global moment:false _:false */
(function () {
    'use strict';

    angular
        .module('vk')
        .constant('moment', moment)
        .constant('lodash', _)
        .constant('appUrl', 'https://api.vi-ni.com/app/v1/')
        .constant('restUrl', 'https://api.vi-ni.com/webapi/v1/');

})();
