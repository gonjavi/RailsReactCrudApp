module Api
  module V1
    Class AirlinesController < ApplicationController
      def index
        airlines = Airline.all

        render json:AirlineSerializer.new(airlines, options).serialized_json
      end

      def show
        airline = Airline.find_by(slun: params[:slug])

        render json:AirlineSerializer.new(airlines, options).serialized_json
      end

      def create
        airline = Airline.new(ailine_params)

        if airline.save
          render json:AirlineSerializer.new(airline).serialized_json
        else
          render json: {error:airline.errors.messages}, status: 422
        end
      end

      def update
        airline = Airline.find_by(slug: params[:slug])

        if airline.save
          render json:AirlineSerializer.new(airline, options).serialized_json
        else
          render json: {error:airline.errors.messages}, status: 422
        end
      end

      def destroy
        ailine = Airline.find_by(slug: params[:slug])

        if airline.destroy
          head :no_content
        else
          render json: {error: airline.errors.messages}, status: 422
        end
      end

      def options
        @ptions ||= {include: %i[reviews]}
      end

      private

      def airlines_params
        params.require(:airline).permit(:name, :image_url)
      end
    end
  end
end