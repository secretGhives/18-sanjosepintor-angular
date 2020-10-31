import angular from 'angular';
import 'angular-mocks';
import * as toolsPowerWashing from './tools-power-washing.component';

describe('toolsPowerWashing component', () => {

  beforeEach(() => {
    angular
      .module('toolsPowerWashing',[])
      .component('toolsPowerWashing', toolsPowerWashing);
    angular.mock.module('toolsPowerWashing');
  });

  it('should render tools-power-washing component', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<tools-power-washing></tools-power-washing>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));

});
