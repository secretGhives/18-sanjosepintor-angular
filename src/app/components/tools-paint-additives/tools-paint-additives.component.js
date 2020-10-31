import componentTpl from './tools-paint-additives.component.html';

let toolsPaintAdditivesComponent = {
  templateUrl: componentTpl,
  controller: ToolsPaintAdditivesController,
  bindings: {}
};

function ToolsPaintAdditivesController($scope, $log) {
  'ngInject';
  $log.debug('Hello from' + 'ToolsPaintAdditives' + 'Controller (component)!');
}

export default toolsPaintAdditivesComponent;
