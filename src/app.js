var thermostat = new Thermostat();

$('#up_button').click(function() {
  thermostat.increaseTemperature();
  UpdateThermo();
});

$('#down_button').click(function() {
  thermostat.decreaseTemperature();
  UpdateThermo();
});

$('#reset').click(function() {
  thermostat.resetTemperature();
  UpdateThermo();
});

$('#myonoffswitch').click(function() {
  thermostat.changePowerSaveMode();
  UpdateThermo();
});

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
  $('#current_temperature').html(thermostat.temperature + '°c');
  changeColour();
};
