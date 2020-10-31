import componentTpl from './moving.component.html';

let movingComponent = {
  templateUrl: componentTpl,
  controller: MovingController,
  bindings: {}
};

function MovingController($scope) {
  'ngInject';
}

export default movingComponent;
