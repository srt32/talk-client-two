class ContactsController < ApplicationController
  skip_before_filter :verify_authenticity_token
  respond_to :json

  def create
    contact = Contact.create(contact_params)

    respond_with(contact, serializer: ContactSerializer, location: false)
  end

  def index
    contacts = Contact.all

    respond_with(contacts, each_serializer: ContactSerializer)
  end

  private

  def contact_params
    cleansed_params.
      require(:contact).
      permit(:name, :frequency)
  end

  def cleansed_params
    params[:contact].delete(:lastConversation)
    params
  end
end
