import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("index", {
    path: "/"
  }, function() {
    this.route("overview");
    this.route("drop-down-menu");
    this.route("tab");
  });

});

export default Router;