var express = require('express');

// Creat our App
var app = express();

// If is local use port 3000 else use env.PORT
const PORT = proccess.env.PORT || 3000;

app.use(function(req, res, next) {
     if (req.headers['x-forwarded-proto'] === 'http'){
          next();
     }else {
          res.redirect('http://' + req.hostname + req.url);
     }
});

// Tel it which folder wants to serve it
app.use(express.static('public'));

// Start the server
app.listen(PORT, function(){
     console.log("Express server is up on port " + PORT);
});
