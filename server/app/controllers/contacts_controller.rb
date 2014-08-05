class ContactsController < ApplicationController
  respond_to :json

  def index
    contacts = Contact.all

    respond_with(contacts, each_serializer: ContactSerializer)
  end
end
