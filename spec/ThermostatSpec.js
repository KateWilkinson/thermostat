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

    it('and if turned on when temp is under 25 degrees, temp will remain the same', function(){
      thermostat.temperature = 18;
      thermostat.powerSave = false;
      thermostat.changePowerSaveMode()
      expect(thermostat.temperature).toEqual(18)
    });

  });

  describe('has a coloured display', function() {

    it('which is "green" if temp is lower than 18', function(){
      thermostat.temperature = 16;
      thermostat._changeDisplay()
      expect(thermostat.colour).toEqual('green')
    });

    it('which is "yellow" if temp is between 18 and 24', function(){
      thermostat.temperature = 20;
      thermostat._changeDisplay()
      expect(thermostat.colour).toEqual('yellow')
    });

    it('which is "red" if temp is 25 or over', function(){
      thermostat.temperature = 26;
      thermostat._changeDisplay()
      expect(thermostat.colour).toEqual('red')
    });

    it('which changes to "green" when temp is lowered to 17', function(){
      thermostat.temperature = 18;
      thermostat.decreaseTemperature()
      expect(thermostat.colour).toEqual('green')
    });

    it('which changes to "yellow" when temp lowered from 25 to 24', function(){
      thermostat.temperature = 25;
      thermostat.decreaseTemperature()
      expect(thermostat.colour).toEqual('yellow')
    });

    it('which changes to "yellow" when temp increased from 17 to 18', function(){
      thermostat.temperature = 17;
      thermostat.colour = 'green';
      thermostat.increaseTemperature()
      expect(thermostat.colour).toEqual('yellow')
    });

    it('which changes to "red" when temp increased from 24 to 25', function(){
      thermostat.temperature = 24;
      thermostat.increaseTemperature()
      expect(thermostat.colour).toEqual('red')
    });

    it('which changes to "yellow" when you reset to default temp from over 25', function(){
      thermostat.temperature = 25;
      thermostat.colour = 'red';
      thermostat.resetTemperature()
      expect(thermostat.colour).toEqual('yellow')
    });

    it('which changes to "yellow" when you reset to default temp from under 18', function(){
      thermostat.temperature = 14;
      thermostat.colour = 'green';
      thermostat.resetTemperature()
      expect(thermostat.colour).toEqual('yellow')
    });

  });


});