class SessionsController < ApplicationController
  def new
    @title = "Sign in"
  end
  
  def create
    user = User.authenticate(params[:session][:email], params[:session][:password])
    if user.nil?
      #display error message
      flash.now[:error] = "invalid email/password combination."
      @title = "Sign in"
      render 'new'
    else
      #signin user to show page
      sign_in user
      redirect_back_or user
    end
  end
  
  def destroy
    sign_out
    redirect_to root_path
  end
  
end
