var express = require('express');
var path = require('path');
var routes = require('./config/routes');
var app = express();

// controllers
var controllers = {
  home: require('./controllers/home'),
  register: require('./controllers/register')
}

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use('/static', express.static(__dirname + '/public'));

var config = {
  app: app,
  controllers: controllers
}

// routes
routes(config);

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('server:', server.address());
  console.log("Express server listening at http://"+host+":"+port);
});
