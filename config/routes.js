module.exports = function(config) {
  // home
  var app = config.app;
  var home = config.controllers.home;
  var register = config.controllers.register;

  app.get('/', home.index);
  app.get('/home', home.index);

  app.get('/register/new', register.new);

}
