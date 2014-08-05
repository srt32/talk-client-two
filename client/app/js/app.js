App = Ember.Application.create();

App.Router.map(function() {
  this.resource('contacts', { path: '/' }, function() {
    this.resource('conversations', function() {
    });
  });
});

//App.ApplicationAdapter = DS.RESTAdapter.extend({});

App.ContactsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('contact');
  }
});

App.ContactsController = Ember.ArrayController.extend({
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
