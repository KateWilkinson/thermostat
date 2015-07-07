var thermostat = new Thermostat();

// temp.innerHTML = thermostat.temperature + '°c'

document.getElementById('up_button').onclick=function() {
  thermostat.increaseTemperature();
  document.getElementById('current_temperature').innerHTML = thermostat.temperature + '°c'
};

document.getElementById('down_button').onclick=function() {
  thermostat.decreaseTemperature();
  document.getElementById('current_temperature').innerHTML = thermostat.temperature + '°c'
};


// Thermostat.prototype.up = function() {
//   var temp = document.getElementById('current_temperature');
//   thermostat.increaseTemperature();
//   temp.innerHTML = thermostat.temperature + '°c'
// };

// Thermostat.prototype.down = function() {
//   var temp = document.getElementById('current_temperature');
//   thermostat.decreaseTemperature();
//   temp.innerHTML = thermostat.temperature + '°c'
// };



