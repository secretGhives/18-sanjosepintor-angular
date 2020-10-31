import angular from 'angular';
import 'angular-mocks';
import * as toolsOnhand from './tools-onhand.component';

describe('toolsOnhand component', () => {

  beforeEach(() => {
    angular
      .module('toolsOnhand',[])
      .component('toolsOnhand', toolsOnhand);
    angular.mock.module('toolsOnhand');
  });

  it('should render tools-onhand component', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<tools-onhand></tools-onhand>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));

});
