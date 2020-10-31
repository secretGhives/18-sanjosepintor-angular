import angular from 'angular';
import 'angular-mocks';
import * as toolsSafetyPersonal from './tools-safety-personal.component';

describe('toolsSafetyPersonal component', () => {

  beforeEach(() => {
    angular
      .module('toolsSafetyPersonal',[])
      .component('toolsSafetyPersonal', toolsSafetyPersonal);
    angular.mock.module('toolsSafetyPersonal');
  });

  it('should render tools-safety-personal component', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<tools-safety-personal></tools-safety-personal>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));

});
