import componentTpl from './tools-details.component.html';

let toolsDetailsComponent = {
  templateUrl: componentTpl,
  controller: ToolsDetailsController,
  bindings: {}
};

function ToolsDetailsController($scope, $log) {
  'ngInject';
  $log.debug('Hello from' + 'ToolsDetails' + 'Controller (component)!');
}

export default toolsDetailsComponent;
