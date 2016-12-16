var React = require('react');

var WeatherMessage = ({temp, location}) => {
     return (
           <h1>{location} is {temp} tommorow.</h1>
     )
}
module.exports = WeatherMessage;
