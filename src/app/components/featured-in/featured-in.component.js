import componentTpl from './featured-in.component.html';

let featuredInComponent = {
  templateUrl: componentTpl,
  controller: FeaturedInController,
  bindings: {}
};

function FeaturedInController($scope) {
  'ngInject';
}

export default featuredInComponent;
