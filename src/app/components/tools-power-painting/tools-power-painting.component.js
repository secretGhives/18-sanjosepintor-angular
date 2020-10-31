import componentTpl from './tools-power-painting.component.html';

let toolsPowerPaintingComponent = {
  templateUrl: componentTpl,
  controller: ToolsPowerPaintingController,
  bindings: {}
};

function ToolsPowerPaintingController($scope, $log) {
  'ngInject';
  $log.debug('Hello from' + 'ToolsPowerPainting' + 'Controller (component)!');
}

export default toolsPowerPaintingComponent;
