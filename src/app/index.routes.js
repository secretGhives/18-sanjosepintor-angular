function routeConfig($urlRouterProvider, $stateProvider, $locationProvider) {
  'ngInject';
  // Add new states above
  // Add new routes above
  $urlRouterProvider.otherwise('/');
	// use the HTML5 History API
	$locationProvider.html5Mode(true);
}

export default angular
  .module('index.routes', [])
    .config(routeConfig);
