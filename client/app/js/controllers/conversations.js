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
