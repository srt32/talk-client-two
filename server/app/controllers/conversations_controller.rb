class ConversationsController < ApplicationController
  respond_to :json

  def create
    contact = Contact.find(params[:contact_id])

    conversation = contact.conversations.create

    respond_with(conversation, serializer: ConversationSerializer)
  end

  def index
    conversations = Contact.find(params[:contact_id]).conversations

    respond_with(conversations, each_serializer: ConversationSerializer)
  end
end
