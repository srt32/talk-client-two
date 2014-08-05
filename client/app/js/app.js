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
      var name = this.get('name');
      if (!name.trim()) { return; };

      var contact = this.store.createRecord('contact', {
        name: name,
        frequency: 7
      });

      this.set('name', '');

      contact.save();
    }
  },

  sortedProperties: ['score:asc'],
  sortedContacts: Ember.computed.sort('model', 'sortedProperties')
});
