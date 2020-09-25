Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :questions do
        resources :answers do
          resources :comments
        end
      end
    end
  end
end
