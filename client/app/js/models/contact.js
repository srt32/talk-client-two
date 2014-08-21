App.Contact = DS.Model.extend({
  //conversations: DS.hasMany('conversation', { async: true }),
  conversations: DS.hasMany('conversation'),

  name: DS.attr(),
  frequency: DS.attr('number'),
  last_conversation: DS.attr(
    'date',
    { defaultValue: function() { return new Date(); } }
  ),

  lastConversation: function() {
    var conversations = this.get('conversations').toArray();
    if (conversations.length > 0) {
      return conversations[conversations.length - 1].get('created_at');
    } else {
      return new Date();
    };
  }.property('conversations'),

  lastConversationDaysAgo: function() {
    var miliseconds = Date.now() - Date.parse(this.get('lastConversation'));
    var days = miliseconds / 1000 / 60 / 60 / 24;
    return Math.floor(days);
  }.property('lastConversation'),

  score: function() {
    var score = this.get('lastConversationDaysAgo') / this.get('frequency');
    return Math.round((1-score) * 100);
  }.property('frequency', 'lastConversationDaysAgo')
});
