class ConversationSerializer < ActiveModel::Serializer
  attributes :id, :contact_id, :created_at
end
