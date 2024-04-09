class UsersController < ApplicationController
      # get all users
      def index
        render json: User.all, status: :ok
       end
   
end
