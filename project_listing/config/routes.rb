Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users do
        get 'user_projects', to: 'projects#index'
      end
    end
  end
end
