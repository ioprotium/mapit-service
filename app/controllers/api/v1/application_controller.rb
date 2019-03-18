module ExceptionHandler
  extend ActiveSupport::Concern

  included do
    rescue_from ActiveRecord::RecordNotFound do |e|
      head :not_found
    end

    rescue_from ActiveRecord::RecordInvalid do |e|
      head :unprocessable_entity
    end
  end
end

class ApplicationController < ActionController::API
  include ExceptionHandler
  
  protect_from_forgery with: :null_session
end
