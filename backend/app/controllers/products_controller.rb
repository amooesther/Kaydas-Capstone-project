class ProductsController < ApplicationController
     # get all products
     def index
        render json: Product.all, status: :ok
       end

end
