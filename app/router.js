import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('countries', function() {
    this.route('country', {path: "/:country_id"});
  });
  this.route('overview');
});

export default Router;
