var Thermostat = function () {};

Thermostat.prototype.temperature = 20;

Thermostat.prototype.powerSave = true;

Thermostat.prototype.increaseTemperature = function() {
  if (Thermostat.prototype.powerSave == true) {
    if (Thermostat.prototype.temperature <= 24) {
      Thermostat.prototype.temperature++
    };
  };
  if (Thermostat.prototype.powerSave == false) {
    if (Thermostat.prototype.temperature <= 31) {
      Thermostat.prototype.temperature++
    };
  };
};

Thermostat.prototype.decreaseTemperature = function() {
  if (Thermostat.prototype.temperature > 10) {
    Thermostat.prototype.temperature--
    // console.log(Thermostat.prototype.temperature)
  };
};

Thermostat.prototype.changePowerSaveMode = function() {

  if (Thermostat.prototype.powerSave == true) {
    Thermostat.prototype.powerSave = false;
  } else {
    Thermostat.prototype.powerSave = true;
  };

};
