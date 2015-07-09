var thermostat = new Thermostat();

$(window).load(function () {
  updateThermo();
  getCityTemp($('#select_city').val());
  getCityWeather($('#select_city').val());
});

$('#up_button').click(function() {
  thermostat.increaseTemperature();
  updateThermo();
});

$('#down_button').click(function() {
  thermostat.decreaseTemperature();
  updateThermo();
});

$('#reset').click(function() {
  thermostat.resetTemperature();
  updateThermo();
});

$('#myonoffswitch').click(function() {
  thermostat.changePowerSaveMode();
  updateThermo();
});

$('#select_city').change(function(){
  getCityTemp($(this).val());
  getCityWeather($(this).val());
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

function updateThermo(){
  $('#current_temperature').html(thermostat.temperature + '°c');
  changeColour();
};

function getCityTemp(city){
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=a1151fe1a04efc268bb7ee2de474340a&units=metric';
  var response = $.get(url).done(function() {
    var temp = response.responseJSON.main.temp;
    $("#tempWidget").html('Current temperature in ' + city +': ' + temp + '°c');
    });
};

function getCityWeather(city){
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city +'&APPID=a1151fe1a04efc268bb7ee2de474340a&units=metric';
  var response = $.get(url).done(function() {
    var weather = response.responseJSON.weather[0].main;
    $("#weatherWidget").html('Forecast is: ' + weather);
  });
};
