Rails.application.routes.draw do
  resources :contacts, only: [:create, :index] do
    resources :conversations, only: [:create, :index]
  end

  root to: "embers#show"
end
