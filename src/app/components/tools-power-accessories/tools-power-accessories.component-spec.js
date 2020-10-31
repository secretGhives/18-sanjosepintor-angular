import angular from 'angular';
import 'angular-mocks';
import * as toolsPowerAccessories from './tools-power-accessories.component';

describe('toolsPowerAccessories component', () => {

  beforeEach(() => {
    angular
      .module('toolsPowerAccessories',[])
      .component('toolsPowerAccessories', toolsPowerAccessories);
    angular.mock.module('toolsPowerAccessories');
  });

  it('should render tools-power-accessories component', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<tools-power-accessories></tools-power-accessories>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));

});
