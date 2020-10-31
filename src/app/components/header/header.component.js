import componentTpl from './header.component.html';

let headerComponent = {
  templateUrl: componentTpl,
  controller: HeaderController,
  bindings: {}
};

function HeaderController($scope, store) {
  'ngInject';
  $scope.phone = store.phone;
  $scope.cities = store.cities;
  $scope.company = store.company;
}

export default headerComponent;
