export function initialize(container, application) {
  application.inject('route', 'uiUtilService', 'service:ui-util');
  application.inject('controller', 'uiUtilService', 'service:ui-util');
  application.inject('component', 'uiUtilService', 'service:ui-util');
}

export default {
  name: 'ui-util-service',
  initialize: initialize
};
