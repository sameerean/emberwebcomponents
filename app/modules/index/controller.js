import Ember from 'ember';

export default Ember.Controller.extend({
        sidebarMenuItems: [
            Ember.Object.create({ routeName: "index.overview", displayText: "Overview", isActive:false}),
            Ember.Object.create({ routeName: "index.drop-down-menu", displayText: "Dropdown Menu", isActive:false}),
            Ember.Object.create({ routeName: "index.overview", displayText: "Overview", isActive:false})
        ]
});
