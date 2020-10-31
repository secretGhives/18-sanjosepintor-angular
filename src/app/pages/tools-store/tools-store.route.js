import pageTpl from './tools-store.html';

function routeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('tools-store', {
      url: '/tools-store',
      templateUrl: pageTpl,
      controller: require('./tools-store.controller')
    });

}

export default routeConfig;
