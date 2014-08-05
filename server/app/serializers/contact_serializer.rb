class ContactSerializer < ActiveModel::Serializer
  embed :ids, include: true

  attributes(
    :id,
    :created_at,
    :frequency,
    :last_conversation,
    :name,
    :updated_at
  )

  has_many :conversations, key: :conversations
end
