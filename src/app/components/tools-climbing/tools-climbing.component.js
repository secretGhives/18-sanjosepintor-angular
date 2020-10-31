import componentTpl from './tools-climbing.component.html';

let toolsClimbingComponent = {
  templateUrl: componentTpl,
  controller: ToolsClimbingController,
  bindings: {}
};

function ToolsClimbingController($scope, $log) {
  'ngInject';
  $log.debug('Hello from' + 'ToolsClimbing' + 'Controller (component)!');
}

export default toolsClimbingComponent;
