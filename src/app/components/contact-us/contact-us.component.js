import componentTpl from './contact-us.component.html';

let contactUsComponent = {
  templateUrl: componentTpl,
  controller: ContactUsController,
  bindings: {}
};

function ContactUsController($scope, store) {
  'ngInject';
  $scope.phone = store.phone;
  $scope.email = store.email;
  $scope.company = store.company;
}

export default contactUsComponent;
