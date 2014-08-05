class Contact < ActiveRecord::Base
  has_many :conversations, dependent: :destroy

  def last_conversation
    conversations.order(created_at: :desc).pluck(:created_at).first
  end
end
