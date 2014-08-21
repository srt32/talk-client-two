App.ConversationsController = Ember.ArrayController.extend({
  needs: 'contact',
  //conversations: this.getModelFor('conversations'),
  //sortedProperties: ['created_at:asc'],
  //sortedConversations: Ember.computed.sort('model', 'sortedProperties')

  actions: {
    createConversation: function() {
      var contact = this.get('controllers.contact').get('model');
      var contactId = parseInt(contact.get('id'), 10);

      var conversation = this.store.createRecord('conversation', {
        contact_id: contactId
      });

      conversation.save();
      contact.get('conversations').addObject(conversation);
    }
  }
});
