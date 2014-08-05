class ConversationsController < ApplicationController
  def create
    contact = Contact.find(params[:contact_id])

    conversation = contact.conversations.create

    respond_with(conversation, serializer: ConversationSerializer)
  end
end
