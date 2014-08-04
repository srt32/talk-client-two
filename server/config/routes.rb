Rails.application.routes.draw do
  resources :contacts

  root to: "embers#show"
end
