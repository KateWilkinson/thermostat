var Thermostat = function () {
  this.temperature = 20;
  this.powerSave = true;
};


Thermostat.prototype.increaseTemperature = function() {
  if (this.powerSave == true) {
    if (this.temperature <= 24) {
      this.temperature++
    };
  };
  if (this.powerSave == false) {
    if (this.temperature <= 31) {
      this.temperature++
    };
  };
  this.changeDisplay();
};

Thermostat.prototype.decreaseTemperature = function() {
  if (this.temperature > 10) {
    this.temperature--
    this.changeDisplay()
  };
};

Thermostat.prototype.resetTemperature = function() {
  this.temperature = 20
  this.changeDisplay()
};

Thermostat.prototype.changePowerSaveMode = function() {

  if (this.powerSave == true) {
    this.powerSave = false;
  } else {
    this.powerSave = true;
    this._powerSaveReset();
  };

};

Thermostat.prototype._powerSaveReset = function() {
  if (this.temperature > 25) {
    this.temperature = 25
  };
};

Thermostat.prototype.changeDisplay = function() {

  if (this.temperature < 18) {
    return 'green'
  };
  if (this.temperature >= 18 && this.temperature <= 24) {
    return 'yellow'
  };
  if (this.temperature >= 25) {
    return 'red'
  };
};
