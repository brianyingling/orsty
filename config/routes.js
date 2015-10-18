module.exports = function(config) {
  // home
  var app = config.app;
  var home = config.controllers.home;

  app.get('/', home.index);
  app.get('/home', home.index);
  

}
