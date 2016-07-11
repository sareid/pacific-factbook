import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  full_name: attr('string'),
  country_code: attr('string'),
  capital: attr('string'),
  population: attr('number'),
  government_type: attr('string'),
  flag_url: attr('string'),
  independence: attr('date'),
  gdp_per_capita: attr('number'),
  languages: attr('string'),
  latitude: attr(),
  longitude: attr(),
  description: attr(),
  human_development_index: attr(),
  life_expectancy: attr()
});
