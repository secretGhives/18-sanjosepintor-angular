function beforeAfterDirective($window, $log) {
  'ngInject';

  return {
    restrict: 'E',
    scope: {
    	beforeImageUrl : '=',
    	afterImageUrl : '=',
    },
    link: linkFn,
    template: `
			<style>
			before-after {
				height: 420px;
				position: relative;
				overflow: hidden;
			}
			.comparator { 
				background-image: url({{ afterImageUrl }});
				background-size: initial;
				position: absolute; top: 0; bottom: 0; left: 0; right: 0;
			}
			.handle {
				background-image: url({{ beforeImageUrl }});
				background-size: initial;
				border-right: 3px solid rgba(255,255,255,0.7);
				box-shadow: 10px 0 15px -13px #000;
				position: absolute; bottom: 0; top: 0; left: 0; right: 0;
				width: 50%;
				animation: figure 2s 1 normal ease-in-out 0.1s; 
			}
			.handle:before {
				background: url(../../../assets/images/flechas.png) no-repeat scroll 0 center transparent;
		    background-size: contain;
		    content: " ";
		    height: 100%; width: 45px;
		    margin-right: -24px;
		    position: absolute; top: 0; right: 0;
			}
					
			@keyframes figure {
			  0% {width: 0%; }
			  50% {width: 81%; }
			  100% {width: 50%; }
			}
			</style>

			<div class="comparator">
			  <div class="handle"></div>
			</div>
    `
  };

  function linkFn(scope, elem, attrs, fn) {

		var container = angular.element(elem[0].querySelector('.comparator'));
		var divider = angular.element(elem[0].querySelector('.handle'));

	  function moveOver(handle, container) {

			var move = {};

			var moveHandle =  function(e) {

				var position_var = 25;
				var rect = e.target.getBoundingClientRect();
				var x;
				if (e.targetTouches) {
					x = e.targetTouches[0].pageX - rect.left;
				}

				var pageX = e.offsetX || x;
				var moveWidth = pageX +'px';
				var containerWidth = container.prop('clientWidth');
				var moveLimit = container.prop('clientWidth') - position_var;

				if (pageX <= position_var) {
					moveWidth = position_var +'px';
				} else if (pageX >= moveLimit) {
					moveWidth = moveLimit +'px';
				}

				handle.css({
					width: moveWidth
				});

				//console.log(container.prop('clientWidth') + ' --- ' + moveWidth + ' +++ ' + moveLimit);
			}

			// Support desktop + touch
			container[0].addEventListener('touchmove', moveHandle, false);
			container[0].addEventListener('mousemove', moveHandle, false);
		}

		// Bind move event
		moveOver(divider, container);

  }
}

export default beforeAfterDirective;