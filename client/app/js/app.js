App = Ember.Application.create();

App.ApplicationAdapter = DS.RESTAdapter.extend({});

App.Router.map(function() {
  this.resource('contacts', { path: 'contacts' }, function() {
    this.resource('contact', { path: '/:contact_id' }, function() {
      this.resource('conversations');
    });
  });
  this.resource('contacts', function() {});
});

App.ContactsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('contact');
  }
});

App.ContactRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('contact', params.contact_id);
  },
  serializer: function(model) {
    return { contact_id:model.get('id')};
  }
});

App.ConversationsRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('contact').get('conversations');
  }
});
