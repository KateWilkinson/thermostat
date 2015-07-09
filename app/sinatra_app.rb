require 'sinatra/base'

class ThermoApp < Sinatra::Base

  get '/' do
    erb :'main/thermostat'
  end

  run! if app_file == $0
end