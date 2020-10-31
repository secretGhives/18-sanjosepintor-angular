import componentTpl from './tools-basic.component.html';

let toolsBasicComponent = {
  templateUrl: componentTpl,
  controller: ToolsBasicController,
  bindings: {}
};

function ToolsBasicController($scope, $log) {
  'ngInject';
  $log.debug('Hello from' + 'ToolsBasic' + 'Controller (component)!');
}

export default toolsBasicComponent;
