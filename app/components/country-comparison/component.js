import Ember from 'ember';

export default Ember.Component.extend({

  myTableModel: Ember.computed('model.@each.state', function(){
    var countries = this.get('model');
    var tableRows = [];

    countries.forEach(function(country){
      var countryRow = {
        Country: country.get('name'),
        Population: country.get('population'),
        GDP_per_Capita: country.get('gdp_per_capita')
      };
      tableRows.push(countryRow);
    });
    var output = {
      rows: tableRows
    }
    return output;
  })
});
