class CategoriesController < ApplicationController
      # get all categories
      def index
        render json: Category.all, status: :ok
       end
   
end
