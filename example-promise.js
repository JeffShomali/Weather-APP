//
// function getTempPromise (location) {
//      return new Promise(function(resolve, reject){
//           setTimeout(function(){
//                resolve(79);
//                reject('City not found');
//           }, 1000);
//      });
// }
//
//
// getTempPromise('Philadelphia').then(function(temp){
//      console.log('promise success', temp);
// }, function(err) {
//      console.log('promise error', err);
// });


function addPromise(one, two) {
     return new Promise(function(resolve, reject){
          if(typeof one === 'number' && typeof two === 'number') {
               resolve(one + two);
          }else {
               reject('Arguments should be numbers');
          }
     });
}

addPromise(10,12).then(function(sum){
     console.log('success', sum);
}, function (err){
     console.log('error', err);
});

addPromise("jeff", 9).then(function (sum) {
     console.log('this is not showing in console');
}, function(err) {
     console.log('This error is showing in console', err);
});

// http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=b954e8374f1fcb5b5cf8681917f68e62&units=imperial
