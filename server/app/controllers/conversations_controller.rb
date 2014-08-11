class ConversationsController < ApplicationController
  skip_before_filter :verify_authenticity_token
  respond_to :json

  def create
    conversation = contact_for_creation.conversations.create

    respond_with(conversation, serializer: ConversationSerializer, location: false)
  end

  def index
    conversations = Contact.find(params[:contact_id]).conversations

    respond_with(conversations, each_serializer: ConversationSerializer)
  end

  private

  def contact_for_creation
    Contact.find(params['conversation']['contact_id'])
  end
end
