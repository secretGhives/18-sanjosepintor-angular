import componentTpl from './our-offer.component.html';

let ourOfferComponent = {
  templateUrl: componentTpl,
  controller: OurOfferController,
  bindings: {}
};

function OurOfferController($scope) {
  'ngInject';
}

export default ourOfferComponent;
