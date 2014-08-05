App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

//App.ApplicationAdapter = DS.RESTAdapter.extend({});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('contact');
  }
});

App.IndexController = Ember.ArrayController.extend({
  actions: {
    createContact: function() {
      
    }
  },

  sortedProperties: ['score:asc'],
  sortedContacts: Ember.computed.sort('model', 'sortedProperties')
});
