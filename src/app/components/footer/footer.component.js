import componentTpl from './footer.component.html';

let footerComponent = {
  templateUrl: componentTpl,
  controller: FooterController,
  bindings: {}
};

function FooterController($scope, $log, store) {
  'ngInject';
  //$log.debug('Footer' + ' checking in');
  $scope.phone = store.phone;
  $scope.cities = store.cities;
  $scope.company = store.company;
}

export default footerComponent;
