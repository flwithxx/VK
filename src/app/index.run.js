(function() {
  'use strict';

  angular
    .module('vk')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
