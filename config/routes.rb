Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :markers
      get 'geocoder/:address', to: 'markers#geocoder'
    end
  end  
end
