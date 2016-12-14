var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=b954e8374f1fcb5b5cf8681917f68e62&units=imperial';

module.exports = {
     getTemp: function(location) {
          {/* Create Quey Sytring */}
          var encodedLocation = encodeURIComponent(location);
          var requestUrl = `${OPEN_WEATHER_MAP_URL}&q={encodedLocation}`;

          {/* Make Request With Axios Library and Promise*/}
          return axios.get(requestUrl).then(function (res) {
               if(res.data.cos && res.data.message){
                    throw new Error(res.data.message);
               }else {
                    return res.data.main.temp;
               }
          }, function(res) {
               throw new Error(res.data.message);
          });
     }
}
