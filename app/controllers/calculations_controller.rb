class CalculationsController < ApplicationController

  # GET /calculations
  # GET /calculations.json
  def index
    session[:result] = session[:result] || Array.new
  end

  def create
    if (session[:result].length == 10)
        session[:result].pop
        session[:result].unshift(params[:log])
    else
        session[:result].unshift(params[:log])  
    end

    @result = params[:log]
    respond_to do |format|
      format.js
    end
  end


end
