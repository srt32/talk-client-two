App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return [
      App.Contact.create(
        {
          id: 1,
          name: "Jame",
          frequency: 14,
          lastConversation: "2014-08-03 00:28:25"
        }
      ),
      App.Contact.create(
        {
          id: 2,
          name: "Dolly",
          frequency: 14,
          lastConversation: "2014-06-10 00:28:25"
        }
      ),
      App.Contact.create(
        {
          id: 3,
          name: "Masha",
          frequency: 14,
          lastConversation: "2014-04-10 00:28:25"
        }
      )
    ];
  }
});

App.IndexController = Ember.ArrayController.extend({
  sortedProperties: ['score:asc'],
  sortedContacts: Ember.computed.sort('model', 'sortedProperties')
});

App.Contact = Ember.Object.extend({
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
