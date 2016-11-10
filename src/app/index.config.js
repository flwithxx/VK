(function () {
    'use strict';

    angular
        .module('vk')
        .config(config);

    /** @ngInject */
    function config($logProvider) {
        // Enable log
        $logProvider.debugEnabled(true);
    }

})();
