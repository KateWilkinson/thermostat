var thermostat = new Thermostat();

document.getElementById('up_button').onclick=function() {
  thermostat.increaseTemperature();
  UpdateThermo();
};

document.getElementById('down_button').onclick=function() {
  thermostat.decreaseTemperature();
  UpdateThermo();
};

document.getElementById('reset').onclick=function(){
  thermostat.resetTemperature();
  UpdateThermo();
};

document.getElementById('myonoffswitch').onchange=function(){
  thermostat.changePowerSaveMode();
  UpdateThermo();
};

function changeColour() {
  if (thermostat.colour == 'green') {
    $('#current_temperature').removeClass().addClass('green');
    }
  if (thermostat.colour == 'yellow') {
    $('#current_temperature').removeClass().addClass('yellow');
    }
  if (thermostat.colour == 'red') {
    $('#current_temperature').removeClass().addClass('red');
  };
};

function UpdateThermo(){
  document.getElementById('current_temperature').innerHTML = thermostat.temperature + '°c';
  changeColour();
};
