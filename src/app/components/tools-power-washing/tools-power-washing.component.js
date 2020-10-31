import componentTpl from './tools-power-washing.component.html';

let toolsPowerWashingComponent = {
  templateUrl: componentTpl,
  controller: ToolsPowerWashingController,
  bindings: {}
};

function ToolsPowerWashingController($scope, $log) {
  'ngInject';
  $log.debug('Hello from' + 'ToolsPowerWashing' + 'Controller (component)!');
}

export default toolsPowerWashingComponent;
