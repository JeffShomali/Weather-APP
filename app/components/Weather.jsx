var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
     render: function() {
          return (
                 <div>
                      <h1>Get Weather</h1>
                      <WeatherForm />
                      <br />
                      <WeatherMessage />
                 </div>
          )
     }
});

module.exports = Weather;


http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=b954e8374f1fcb5b5cf8681917f68e62&units=imperial
