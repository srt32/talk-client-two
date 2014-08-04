class ContactsController < ApplicationController
  def index
    contacts = Contact.all

    render(json: { contacts: contacts }.to_json )
  end
end
