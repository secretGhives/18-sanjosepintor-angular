import componentTpl from './powerwash.component.html';

let powerwashComponent = {
  templateUrl: componentTpl,
  controller: PowerwashController,
  bindings: {}
};

function PowerwashController($scope) {
  'ngInject';
}

export default powerwashComponent;
