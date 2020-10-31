import componentTpl from './interior-steps.component.html';

let interiorStepsComponent = {
  templateUrl: componentTpl,
  controller: InteriorStepsController,
  bindings: {}
};

function InteriorStepsController($scope, store) {
  'ngInject';
  $scope.company = store.company;
}

export default interiorStepsComponent;
