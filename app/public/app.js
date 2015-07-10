var thermostat = new Thermostat();

$(window).load(function () {
  thermostat.temperature = $('#current_temperature').text();
  changeColour();
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
  if (thermostat.changeDisplay() == 'green') {
    $('#current_temperature').removeClass().addClass('green');
    }
  if (thermostat.changeDisplay() == 'yellow') {
    $('#current_temperature').removeClass().addClass('yellow');
    }
  if (thermostat.changeDisplay() == 'red') {
    $('#current_temperature').removeClass().addClass('red');
  };
};

function updateThermo(){
  $.post('/',{'temperature': '' + thermostat.temperature})
  changeColour();
  $('#current_temperature').html(thermostat.temperature);
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

navigator.geolocation.getCurrentPosition(currentLocation);

function currentLocation(Geoposition){
  latitude = Geoposition.coords.latitude;
  longitude = Geoposition.coords.longitude;
  currentLocationTemp();
};

function currentLocationTemp(){
  ($.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&units=metric',
    function (response) {
      $('#location_temp').html(response.main.temp);
      $('#location_name').html(response.name);
    }));
};
