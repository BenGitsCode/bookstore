import DS from 'ember-data';
import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default DS.JSONAPIAdapter.extend({
  
  pathForType: function(type) {
return Ember.String.pluralizer(Ember.String.underscore(type));

});
