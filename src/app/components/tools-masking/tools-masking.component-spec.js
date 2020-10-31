import angular from 'angular';
import 'angular-mocks';
import * as toolsMasking from './tools-masking.component';

describe('toolsMasking component', () => {

  beforeEach(() => {
    angular
      .module('toolsMasking',[])
      .component('toolsMasking', toolsMasking);
    angular.mock.module('toolsMasking');
  });

  it('should render tools-masking component', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<tools-masking></tools-masking>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));

});
