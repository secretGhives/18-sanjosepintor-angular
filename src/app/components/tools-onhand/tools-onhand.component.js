import componentTpl from './tools-onhand.component.html';

let toolsOnhandComponent = {
  templateUrl: componentTpl,
  controller: ToolsOnhandController,
  bindings: {}
};

function ToolsOnhandController($scope, $log) {
  'ngInject';
  $log.debug('Hello from' + 'ToolsOnhand' + 'Controller (component)!');
}

export default toolsOnhandComponent;
