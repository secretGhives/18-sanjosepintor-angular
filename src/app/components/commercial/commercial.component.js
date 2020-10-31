import componentTpl from './commercial.component.html';

let commercialComponent = {
  templateUrl: componentTpl,
  controller: CommercialController,
  bindings: {}
};

function CommercialController($scope) {
  'ngInject';
}

export default commercialComponent;
