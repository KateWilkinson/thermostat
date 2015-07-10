require 'sinatra/base'
require 'byebug'

class ThermoApp < Sinatra::Base

  enable :sessions

  post '/' do
    temperature = params[:temperature]
    session[:temperature] = temperature
  end

  get '/' do
    if session[:temperature]
      @temperature = session[:temperature]
    else
      @temperature = 20
    end
    erb :'main/thermostat'
  end

  run! if app_file == $0
end