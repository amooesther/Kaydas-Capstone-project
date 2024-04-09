Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  resources :users, only: [:index, :show, :create]
  resources :products, only: [:index, :show]
  resources :orders, only: [:index, :show, :create]
  resources :categories, only: [:index, :show]
  resources :order_items, only: [:index, :show]
end
