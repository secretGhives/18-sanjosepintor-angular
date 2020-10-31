import componentTpl from './tools-power-accessories.component.html';

let toolsPowerAccessoriesComponent = {
  templateUrl: componentTpl,
  controller: ToolsPowerAccessoriesController,
  bindings: {}
};

function ToolsPowerAccessoriesController($scope, $log) {
  'ngInject';
  $log.debug('Hello from' + 'ToolsPowerAccessories' + 'Controller (component)!');
}

export default toolsPowerAccessoriesComponent;
