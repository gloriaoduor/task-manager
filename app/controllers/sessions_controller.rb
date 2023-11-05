class SessionsController < ApplicationController
  # skip_before_action :authorized, only: [:create]


  # login
  def create
    username = params[:username]
    password = params[:password]
    user = User.find_by(username: username)
    if user
      session[:user_id] = user.id
      render json: { message: 'Login successful', user: user }
    else
      render json: { error: 'Invalid username or password' }, status: :unauthorized
    end
  end

  # Logout user
  def destroy
    session.delete(:user_id)
    head :no_content
    render json: { message: 'Logout successful' }
  end

  private

  def permit_params
    params.permit(:username, :password_digest)
  end
end
