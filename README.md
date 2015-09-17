# Thermostat!

## Summary

A simple digital thermostat modelled in JavaScript, test-driven with Jasmine and using jQuery to interact with the HTML in the user interface.

![Thermostat](/images/screenshot1.jpg)

## To install & run

```
git clone https://github.com/KateWilkinson/thermostat.git
cd thermostat
bundle install
rackup
```

Visit ```localhost:9292```

To run tests ```open SpecRunner.html```

## Functionality

* Thermostat starts at 20 degrees
* You can increase the temp with the up button
* You can decrease the temp with the down button
* The minimum temperature is 10 degrees
* If power saving mode is on, the maximum temperature is 25 degrees
* If power saving mode is off, the maximum temperature is 32 degrees
* Power saving mode is on by default
* You can reset the temperature to 20 by hitting the reset button
* The display colour changes based on energy usage - < 18 is green, < 25 is yellow, otherwise red
* User can select a city and see the current temperature and weather forecast
