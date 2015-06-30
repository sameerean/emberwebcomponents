import Ember from 'ember';

export default Ember.Component.extend({
    tagName: "ul",
    classNameBindings: ["defaultStyleClass", "styleClass"],
    defaultStyleClass: "nav nav-sidebar",
    styleClass: null,
    activeClass: "active",
    activeRoute: null,

    data: null,
    currentRoute: null,
    
    init: function() {
        this._super();
    },
    setActiveMenu: function() {
        if(!Ember.isEmpty(this.data)) {
            this.data.forEach(function(_item) {
                _item.set("isActive", this.get("currentRoute") === _item.routeName);
            }, this);
        }
    }.observes("currentRoute").on("init")
    
});
