import componentTpl from './tools-safety-personal.component.html';

let toolsSafetyPersonalComponent = {
  templateUrl: componentTpl,
  controller: ToolsSafetyPersonalController,
  bindings: {}
};

function ToolsSafetyPersonalController($scope, $log) {
  'ngInject';
  $log.debug('Hello from' + 'ToolsSafetyPersonal' + 'Controller (component)!');
}

export default toolsSafetyPersonalComponent;
