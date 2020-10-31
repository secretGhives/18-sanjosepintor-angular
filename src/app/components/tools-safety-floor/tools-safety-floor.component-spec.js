import angular from 'angular';
import 'angular-mocks';
import * as toolsSafetyFloor from './tools-safety-floor.component';

describe('toolsSafetyFloor component', () => {

  beforeEach(() => {
    angular
      .module('toolsSafetyFloor',[])
      .component('toolsSafetyFloor', toolsSafetyFloor);
    angular.mock.module('toolsSafetyFloor');
  });

  it('should render tools-safety-floor component', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<tools-safety-floor></tools-safety-floor>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));

});
