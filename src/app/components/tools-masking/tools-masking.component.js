import componentTpl from './tools-masking.component.html';

let toolsMaskingComponent = {
  templateUrl: componentTpl,
  controller: ToolsMaskingController,
  bindings: {}
};

function ToolsMaskingController($scope, $log) {
  'ngInject';
  $log.debug('Hello from' + 'ToolsMasking' + 'Controller (component)!');
}

export default toolsMaskingComponent;
