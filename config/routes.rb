Rails.application.routes.draw do
  root 'posts#index'
  resources :posts do
    resources :likes
  end
  devise_for :users
end
