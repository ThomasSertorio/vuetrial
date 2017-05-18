Rails.application.routes.draw do
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :employees, only: [:index, :create,:update, :destroy]
  get :dashboard, to: 'pages#dashboard'
  get :selector, to: 'pages#selector'
  get :listing, to: 'pages#listing'
end
