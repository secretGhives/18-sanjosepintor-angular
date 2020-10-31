import componentTpl from './book-now.component.html';

let bookNowComponent = {
  templateUrl: componentTpl,
  controller: BookNowController,
  bindings: {}
};

function BookNowController($scope) {
  'ngInject';
}

export default bookNowComponent;
