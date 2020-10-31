import componentTpl from './commercial-details.component.html';

let commercialDetailsComponent = {
  templateUrl: componentTpl,
  controller: CommercialDetailsController,
  bindings: {}
};

function CommercialDetailsController($scope) {
  'ngInject';
}

export default commercialDetailsComponent;
