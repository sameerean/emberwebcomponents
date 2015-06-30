import Ember from 'ember';

export default Ember.Controller.extend({
    currentPath: '',
    currentPath2: '',
        
   updateCurrentPath: function() {
    this.get("uiUtilService").set('currentPath', this.get('currentPath'));
  }.observes('currentPath')
});
