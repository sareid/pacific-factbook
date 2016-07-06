import Ember from 'ember';

export default Ember.Component.extend({
  populationStyled: Ember.computed( function(){
    return this.get('model.population').toLocaleString();
  }),
  numberStyled: Ember.computed( function(){
    return this.get('model.gdp_per_capita').toLocaleString();
  })
});
