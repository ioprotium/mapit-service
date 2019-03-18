module Api
  module V1

    module GMapsGeocoder
      require 'net/http'
    
      def get_geoposition(address)
        url = URI.parse("https://maps.googleapis.com/maps/api/geocode/json?address=#{address}&key=#{ENV["GOOGLEK"]}")
        Net::HTTP.get(url)
      end
      
    end

    class MarkersController < ApplicationController     
      include GMapsGeocoder

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
        render json: get_geoposition(params[:address])
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
