import componentTpl from './tools-safety-floor.component.html';

let toolsSafetyFloorComponent = {
  templateUrl: componentTpl,
  controller: ToolsSafetyFloorController,
  bindings: {}
};

function ToolsSafetyFloorController($scope, $log) {
  'ngInject';
  $log.debug('Hello from' + 'ToolsSafetyFloor' + 'Controller (component)!');
}

export default toolsSafetyFloorComponent;
