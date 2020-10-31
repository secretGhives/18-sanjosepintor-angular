
function affixTopDirective($window) {
  'ngInject';

  var $win = angular.element($window);

  return {
    restrict: 'A',
    scope: {},
    link: linkFn
  };

  function linkFn(scope, elem, attrs, fn) {
    
    var topClass = attrs.affixTop, 
        offsetTop = elem.prop('offsetTop'); 

    window.onscroll = function () {
      if (window.scrollY >= offsetTop + 15) {
        elem.addClass(topClass);
      } else {
        elem.removeClass(topClass);
      }

      // any $scope variable updates
      scope.$digest();
    };

  }
}

export default affixTopDirective;
