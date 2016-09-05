import DS from 'ember-data';
// impoer attr from 'ember-data/attr';
// import { hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  name: attr('string'),
  discount: attr('number'),
  published: hasMany('book', { async: true })
});
