class UsersController < ApplicationController

  def new
    user = User.new(permit_params)
    if user.save
      render json: {message: "User created successfully"}, status: :ok
    else
      render json: {error: user.errors}, status: :bad_request
    end
  end
  def index
    users = User.all
    render json: users, status: :ok
  end

  def permit_params
    params.permit(:username, :password_digest)
  end

end
