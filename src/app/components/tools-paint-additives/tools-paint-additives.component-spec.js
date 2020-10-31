import angular from 'angular';
import 'angular-mocks';
import * as toolsPaintAdditives from './tools-paint-additives.component';

describe('toolsPaintAdditives component', () => {

  beforeEach(() => {
    angular
      .module('toolsPaintAdditives',[])
      .component('toolsPaintAdditives', toolsPaintAdditives);
    angular.mock.module('toolsPaintAdditives');
  });

  it('should render tools-paint-additives component', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<tools-paint-additives></tools-paint-additives>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));

});
