var thermostat = new Thermostat();

document.getElementById('up_button').onclick=function() {
  thermostat.increaseTemperature();
  document.getElementById('current_temperature').innerHTML = thermostat.temperature + '°c'
  changeColour()
};

document.getElementById('down_button').onclick=function() {
  thermostat.decreaseTemperature();
  document.getElementById('current_temperature').innerHTML = thermostat.temperature + '°c'
  changeColour()
};

document.getElementById('reset').onclick=function(){
  thermostat.resetTemperature();
  document.getElementById('current_temperature').innerHTML = thermostat.temperature + '°c'
  changeColour()
};

function changeColour() {
  if (thermostat.colour == 'green') {
    document.getElementById('current_temperature').className = 'green';
    }
  if (thermostat.colour == 'yellow') {
    document.getElementById('current_temperature').className = 'yellow';
    }
  if (thermostat.colour == 'red') {
    document.getElementById('current_temperature').className = 'red';
  };
};



