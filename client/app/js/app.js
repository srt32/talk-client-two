App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    this.store.find('contact');
  }
});

App.IndexController = Ember.ArrayController.extend({
  sortedProperties: ['score:asc'],
  sortedContacts: Ember.computed.sort('model', 'sortedProperties')
});

App.Contact = DS.Model.extend({
  name: DS.attr(),
  frequency: DS.attr('integer'),
  lastConversation: DS.attr('string'),

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
