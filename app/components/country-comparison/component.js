import Ember from 'ember';

var {set} = Ember;
debugger;

export default Ember.Component.extend({

  myTableModel: Ember.computed('model.@each.state', function(){
    var countries = this.get('model');
    var tableRows = [];

    countries.forEach(function(country){
      var countryRow = {
        Country: country.get('name'),
        Population: country.get('population'),
        'GDP_per_Capita_USD(PPP)': country.get('gdp_per_capita'),
        Human_Development_Index: country.get('human_development_index') ? country.get('human_development_index') : "N/A",
        Life_Expectancy: country.get('life_expectancy')
      };
      tableRows.push(countryRow);
    });
    var output = {
      rows: tableRows
    }
    return output;
  })
});
