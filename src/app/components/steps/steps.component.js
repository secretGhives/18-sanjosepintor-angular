import componentTpl from './steps.component.html';

let stepsComponent = {
  templateUrl: componentTpl,
  controller: StepsController,
  bindings: {}
};

function StepsController($scope) {
  'ngInject';
}

export default stepsComponent;
