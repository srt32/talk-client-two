App.ConversationsController = Ember.ArrayController.extend({
  needs: 'contact',
  //conversations: this.getModelFor('conversations'),
  //sortedProperties: ['created_at:asc'],
  //sortedConversations: Ember.computed.sort('model', 'sortedProperties')

  actions: {
    createConversation: function() {
      var contactId = parseInt(this.get('controllers.contact').get('model').get('id'), 10);

      var conversation = this.store.createRecord('conversation', {
        contact_id: contactId
      });

      conversation.save();
    }
  }
});
