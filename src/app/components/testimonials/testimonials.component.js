import componentTpl from './testimonials.component.html';

let testimonialsComponent = {
  templateUrl: componentTpl,
  controller: TestimonialsController,
  bindings: {}
};

function TestimonialsController($scope, $log, store) {
  'ngInject';
  $scope.email = store.email;

  store.getReviews()
  .then(response => {
    // console.info('Google API');
    // console.table(response);
    // console.info('^ Google API ^');
  	if (response.data) {
      console.log('SUCCESS GOOGLE');
    	$scope.google_url = response.result.url;

    	//temp until another review been added to check the value
    	$scope.rating = response.result.reviews[0].aspects[0].rating;
    	$scope.reviews = response.result.reviews;
    	//console.table($scope.reviews);
    } else {
      $scope.offline = true;
      console.log('GOOGLE API OFFLINE');
    }
  });
}

export default testimonialsComponent;
