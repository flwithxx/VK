/* global moment:false _:false */
(function () {
    'use strict';

    angular
        .module('vk')
        .constant('moment', moment)
        .constant('lodash', _)
        .constant('JsBarcode', JsBarcode)
        .constant('appUrl', 'http://localhost:8090/app/')
        .constant('restUrl', 'http://localhost:8090/rest/')
        .constant('restUrlV2', 'http://localhost:8090/rest2/');
        // .constant('appUrl', 'https://api.vi-ni.com/app/v1/')
        // .constant('restUrl', 'https://api.vi-ni.com/webapi/v1/')
        // .constant('restUrlV2', 'https://api.vi-ni.com/webapi/v2/');

})();
