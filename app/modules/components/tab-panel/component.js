import Ember from 'ember';

export default Ember.Component.extend({
        role: "tabpanel",
        classNameBindings: ["defaultStyleClass", "fade:fade", "isDefaultTab:in", "isDefaultTab:active"],
        defaultStyleClass: "tab-pane",
        isDefaultTab: false,
        fade: false,
        active: false,
        displayName: "Display Name",
        
        linkName: function() {
            return "#" + this.get("id");
        }.property("id"),
        
        
    init: function() {
        this._super();
    },
    
    registerWithParent: function() {
        var _parentTabSet = this._findParentTabSet(this);
        if(_parentTabSet !== null) {
            _parentTabSet.tabPanels.addObject(this);
            this.set("fade", _parentTabSet.get("fade"));
        }
    }.on("init"),
    _findParentTabSet: function(_view) {
        var _parent = this.get("parentView");
        if(_parent === null) {
            return null;
        }
        if(_parent.toString().indexOf("component:tab-set") > -1) {
            return _parent;
        }
        return this._findParentTabSet(_view);
    }

});
