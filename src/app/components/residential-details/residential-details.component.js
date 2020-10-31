import componentTpl from './residential-details.component.html';

let residentialDetailsComponent = {
  templateUrl: componentTpl,
  controller: ResidentialDetailsController,
  bindings: {}
};

function ResidentialDetailsController($scope) {
  'ngInject';
}

export default residentialDetailsComponent;
