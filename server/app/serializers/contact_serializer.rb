class ContactSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :created_at,
    :frequency,
    :name,
    :updated_at
  )
end
