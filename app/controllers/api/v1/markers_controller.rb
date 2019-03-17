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
        @marker = Marker.new(check)
        if @marker.save
         render json: @marker, status: :created
        else
         render json: @marker.errors, status: :unprocessable_entity
        end
      end

      # /markers/:id
      def update
        if @marker.update(check)
         render json: @marker
        else
          render json: @marker.errors, status: :unprocessable_entity
        end
      end

      # /markers/:id
      def show
        render json: @marker
      end

      # /markers/:id
      def destroy
        @marker.destroy
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
