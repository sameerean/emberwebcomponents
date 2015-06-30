import Ember from 'ember';

export default Ember.Route.extend({
        init: function() {
            this._super();
        },
        redirect: function(transition) {
           /* if(!this.sessionManager.isLoggedIn) {
                this.sessionManager.login({
                    userName: "johnsmith",
                    password: null,
                });
//                this.transitionTo("login");
            } else */if(["/"].contains(this.router.location.getURL())) {
                this.transitionTo("index.overview");
            } 
        }
});
