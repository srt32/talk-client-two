App.Conversation = DS.Model.extend({
  contact: DS.belongsTo('contact'),
  created_at: DS.attr('date')
});
