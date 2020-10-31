import * as route from './tools-store.route';
import './tools-store.scss';

const pageModule = angular.module('toolsStorePage', [
  'ui.router'
]);

pageModule.config(route);

export default pageModule;
