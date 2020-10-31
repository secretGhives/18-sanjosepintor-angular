import angular from 'angular';
import 'angular-mocks';
import * as toolsBasic from './tools-basic.component';

describe('toolsBasic component', () => {

  beforeEach(() => {
    angular
      .module('toolsBasic',[])
      .component('toolsBasic', toolsBasic);
    angular.mock.module('toolsBasic');
  });

  it('should render tools-basic component', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<tools-basic></tools-basic>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));

});
