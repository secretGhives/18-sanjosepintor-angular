import componentTpl from './instagram-feed.component.html';

let instagramFeedComponent = {
  templateUrl: componentTpl,
  controller: InstagramFeedController,
  bindings: {}
};

function InstagramFeedController($scope, $log, store) {
  'ngInject';
  $scope.instagurl = store.instagurl;

  store.getInstagrams()
  .then(response => {
    // console.info('Instagram API');
    // console.table(response);
    // console.info('Instagram API > ' + response.status);
    // console.info('^ Instagram API ^');
    if (response.data) {
      console.log('SUCCESS INSTAGRAM');
      $scope.instagrams = response.data;
    } else {
      $scope.offline = true;
      console.log('INSTAGRAM API OFFLINE');
      //console.table(response);
    }
  });

}

export default instagramFeedComponent;
