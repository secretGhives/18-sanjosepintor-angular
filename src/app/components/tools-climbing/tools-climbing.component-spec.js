import angular from 'angular';
import 'angular-mocks';
import * as toolsClimbing from './tools-climbing.component';

describe('toolsClimbing component', () => {

  beforeEach(() => {
    angular
      .module('toolsClimbing',[])
      .component('toolsClimbing', toolsClimbing);
    angular.mock.module('toolsClimbing');
  });

  it('should render tools-climbing component', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<tools-climbing></tools-climbing>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));

});
