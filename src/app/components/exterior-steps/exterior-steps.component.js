import componentTpl from './exterior-steps.component.html';

let exteriorStepsComponent = {
  templateUrl: componentTpl,
  controller: ExteriorStepsController,
  bindings: {}
};

function ExteriorStepsController($scope, store) {
  'ngInject';
  $scope.company = store.company;
}

export default exteriorStepsComponent;
