var Thermostat = function () {
  this.temperature = 20;
  this.powerSave = true;
};

// Thermostat.prototype.temperature = 20;

// Thermostat.prototype.powerSave = true;

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
};

Thermostat.prototype.decreaseTemperature = function() {
  if (this.temperature > 10) {
    this.temperature--
    // console.log(Thermostat.prototype.temperature)
  };
};

Thermostat.prototype.resetTemperature = function() {
  this.temperature = 20
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
  this.temperature = 25
};
