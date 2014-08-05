class ContactSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :created_at,
    :frequency,
    :last_conversation,
    :name,
    :updated_at
  )
end
