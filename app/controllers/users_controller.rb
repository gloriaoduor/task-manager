class UsersController < ApplicationController
  # skip_before_action :authorized, only: [:create]


  def create
    @user = User.create(permit_params)
    if @user.valid?
      # @token = encode_token(user_id: @user.id)
      render json: { message: "Created successfully" }, status: :created
    else
      render json: { error: 'failed to create user' }, status: :unprocessable_entity
    end
  end
  def index
    users = User.all
    render json: users, status: :ok
  end

  private
  def permit_params
    params.require(:user).permit(:username, :password_digest)
  end

end
