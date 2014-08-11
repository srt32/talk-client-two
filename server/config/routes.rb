Rails.application.routes.draw do
  resources :contacts, only: [:create, :index] do
    resources :conversations, only: [:index]
  end
  resources :conversations, only: [:create]

  root to: "embers#show"
end
