(function() {
  'use strict';

  angular
    .module('vk')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/register/register.html',
        controller: 'RegisterController',
        controllerAs: 're'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
