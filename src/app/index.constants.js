/* global moment:false _:false */
(function () {
    'use strict';

    angular
        .module('vk')
        .constant('moment', moment)
        .constant('lodash', _)
        .constant('JsBarcode', JsBarcode)
        .constant('appUrl', 'http://192.168.1.104/app/')
        .constant('restUrl', 'http://192.168.1.104/rest/')
        .constant('restUrlV2', 'http://192.168.1.104/rest2/');


})();
