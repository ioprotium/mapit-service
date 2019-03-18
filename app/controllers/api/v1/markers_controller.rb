module Api
  module V1

    class MarkersController < ApplicationController     
      before_action :get_marker, only: [:show, :update, :destroy]

      # /markers
      def index
        @markers = Marker.order(updated_at: :desc)
        render json: @markers
      end

      # /markers
      def create
        @marker = Marker.create!(check)
        render json: @marker, status: :created
      end

      # /markers/:id
      def update
        @marker.update(check)
        render json: @marker
      end

      # /markers/:id
      def show
        render json: @marker
      end

      # /markers/:id
      def destroy
        @marker.destroy
      end

      # Geocoder
      def geocoder
        puts params[:address]
        render json: {'foo' => 'bar'}.to_json
      end

      private 

      def get_marker
        @marker = Marker.find(params[:id])
      end

      def check
        params.permit(:name, :latitude, :longitude)
      end

    end
  
  end
end
