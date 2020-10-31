
function starRatingDirective() {
	'ngInject';

	return {
		restrict: 'E',
		scope: {
      score: '@score',
      numStars: '@stars'
		},
		link: linkFn,
		template: `
		<style>
		star-rating .score-stars .star {
		  display: inline-block;
		  width: 38px;
		  height: 35px;
		  line-height: 38px;
		  background-repeat: no-repeat;
		  background-size: auto 100%;
		  background-image: url(/assets/images/stars.svg);
		}
		star-rating .score-stars .star.one-quarter {
		  background-position: -38px 0;
		}
		star-rating .score-stars .star.half {
		  background-position: -76px 0;
		}
		star-rating .score-stars .star.three-quarters {
		  background-position: -114px 0;
		}
		star-rating .score-stars .star.full {
		  background-position: -152px 0;
		}
		</style>
    <div class="score-stars">
      <div class="star {{star.cls}}" ng-repeat="star in stars"></div>
    </div>
		`
	};

	function linkFn(scope, el, attrs, fn) {
    function rebuildStars (score, numStars) {

      var result = [];

      if(isNaN(numStars))
        return result;

      var
      sClasses = [
        [0,    'empty'],
        [0.25, 'one-quarter'],
        [0.5,  'half'],
        [0.75, 'three-quarters'],
        [1,    'full']
      ];
      
      var scale = ((numStars - 0) / numStars);

      for(var i = 0; i < numStars; i++) {
        var star = {
          fromValue: 0 + (scale * i),
          toValue: 0 + (scale * (i + 1)),
          fill:  0
        };

        if(score) {
          if(star.toValue <= score) {
            star.fill = 1;
          }
          else if((star.toValue - score) < 1) {
            star.fill = 1 - (star.toValue - score);
          }
        }

        star.cls = sClasses.reduce(function (p, c) {
          if(star.fill >= c[0]) return c[1];
          return p;
        }, null);
        
        result.push(star);
      }

      return result;
    }

    function rebuildScopeStars () {
      scope.stars = rebuildStars(
        scope.score || false,
        parseInt(scope.numStars)
      );
    }
    
    
    scope.$watch('score',    rebuildScopeStars);
    scope.$watch('numStars', rebuildScopeStars);
	}
}

export default starRatingDirective;
