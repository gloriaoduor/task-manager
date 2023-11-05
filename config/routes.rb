Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :tasks, only: [:create, :index, :show, :update, :destroy]

  post "/api/auth/register", to: "users#create"
  get "/users", to: "users#index"
  post "/api/auth/login", to: "sessions#create"
  # post "/api/auth/logout", to: "sessions#destroy"
end
