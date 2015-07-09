require 'sinatra/base'

class ThermoApp < Sinatra::Base

  enable :sessions

  post '/' do
    user_temperature = params[:temperature]
    session[:temp] = user_temperature
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