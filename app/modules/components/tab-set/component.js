import Ember from 'ember';

export default Ember.Component.extend({
    tabPanels: Ember.A(),
    tabType: "tab", // option: tabs, pills, stacked
    isJustified: true,
    fade: false,
    tabTypeStyle: function() {
        if(this.tabType === "pills") {
            return "nav nav-pills" + (this.isJustified ? " nav-justified" : "");
        }
        if(this.tabType === "stacked") {
            return "nav nav-pills nav-stacked";
        }
        return "nav nav-tabs" + (this.isJustified ? " nav-justified" : "");
    }.property("tabType"),
    isStacked: function() {
        return this.tabType === "stacked";
    }.property("tabType"),
    init: function() {
        this._super();
        console.log("Inside " + this + ".init...");
    },
    
    willInsertElement: function() {
        console.log("Inside " + this + ".willInsertElement...");
    }
});
