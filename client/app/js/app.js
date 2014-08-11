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

App.ConversationsController = Ember.ArrayController.extend({
  //conversations: this.getModelFor('conversations'),
  //sortedProperties: ['created_at:asc'],
  //sortedConversations: Ember.computed.sort('model', 'sortedProperties')

  actions: {
    createConversation: function() {
      var conversation = this.store.createRecord('conversation', {});

      conversation.save();
    }
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
