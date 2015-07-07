describe('Thermostat', function() {

  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('has temperature value', function() {

    it('and start/default is 20 degrees', function() {
      expect(thermostat.temperature).toEqual(20)
    });

    it('and you can increase the temp', function() {
      thermostat.increaseTemperature()
      expect(thermostat.temperature).toEqual(21)
    });

    it('and you can decrease the temp', function() {
      thermostat.temperature = 30;
      thermostat.decreaseTemperature()
      expect(thermostat.temperature).toEqual(29)
    });

    it('and minimum temperature is 10 degrees', function () {
      thermostat.temperature = 11;
      thermostat.decreaseTemperature()
      thermostat.decreaseTemperature()
      expect(thermostat.temperature).toEqual(10);
    });

    it('which can be reset to default', function(){
      thermostat.temperature = 15;
      thermostat.resetTemperature()
      expect(thermostat.temperature).toEqual(20);
    });

  });

  describe('has power save mode', function() {

    it('which has maximum temperature of 25 degrees when on', function(){
      thermostat.powerSave = true;
      thermostat.temperature = 24;
      thermostat.increaseTemperature()
      thermostat.increaseTemperature()
      expect(thermostat.temperature).toEqual(25);
    });

    it('and maximum temperature is 32 degrees when off', function(){
      thermostat.powerSave = false;
      thermostat.temperature = 31;
      thermostat.increaseTemperature()
      thermostat.increaseTemperature()
      expect(thermostat.temperature).toEqual(32)
    });

    it('which resets temp to 25 when turned on (if temp over 25)', function(){
      thermostat.temperature = 29;
      thermostat.powerSave = false;
      thermostat.changePowerSaveMode()
      expect(thermostat.temperature).toEqual(25)
    });

  });

});