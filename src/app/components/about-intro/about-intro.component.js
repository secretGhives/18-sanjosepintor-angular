import componentTpl from './about-intro.component.html';

let aboutIntroComponent = {
  templateUrl: componentTpl,
  controller: AboutIntroController,
  bindings: {}
};

function AboutIntroController($scope, $log, store, $translate, $rootScope) {
  'ngInject';
  $scope.cities = store.cities;
  $scope.company = store.company;
  $scope.locale = $translate.use();

	$rootScope.$on('$translateChangeSuccess', function (event, data) {
		$scope.locale = data.language;
		//$log.info($translate.use());
	});
}

export default aboutIntroComponent;
