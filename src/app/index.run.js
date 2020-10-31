function runBlock($rootScope, $log, $anchorScroll) {
	'ngInject';

	$log.info('San Jose Pintor is Costa Rica based company.');

  $rootScope.$on("$locationChangeSuccess", function(){
    $anchorScroll();
  });

	// $rootScope.$on('$stateChangeStart', 
	// function(event, toState, toParams, fromState, fromParams){ 
	// 	console.log('START BLOCK TRIGGERED');
	// });

}

export default runBlock;
