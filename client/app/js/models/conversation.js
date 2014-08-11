App.Conversation = DS.Model.extend({
  contact: DS.belongsTo('contact'),
  contact_id: DS.attr(),
  created_at: DS.attr('date')
});
