import angular from 'angular';
import 'angular-mocks';
import * as toolsDetails from './tools-details.component';

describe('toolsDetails component', () => {

  beforeEach(() => {
    angular
      .module('toolsDetails',[])
      .component('toolsDetails', toolsDetails);
    angular.mock.module('toolsDetails');
  });

  it('should render tools-details component', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<tools-details></tools-details>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));

});
