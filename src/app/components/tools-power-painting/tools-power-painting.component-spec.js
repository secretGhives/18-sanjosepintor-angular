import angular from 'angular';
import 'angular-mocks';
import * as toolsPowerPainting from './tools-power-painting.component';

describe('toolsPowerPainting component', () => {

  beforeEach(() => {
    angular
      .module('toolsPowerPainting',[])
      .component('toolsPowerPainting', toolsPowerPainting);
    angular.mock.module('toolsPowerPainting');
  });

  it('should render tools-power-painting component', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<tools-power-painting></tools-power-painting>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));

});
