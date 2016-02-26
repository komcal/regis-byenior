var express  = require('express');
var bodyParser = require('body-parser');
var app = express();
module.exports = function(){
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.set('views','./app/views/');
  app.set('view engine', 'jade');
  app.use(express.static('./public'));

  require('../app/routes/index.routes')(app);
  require('../app/routes/form.routes')(app);
  require('../app/routes/profile.routes')(app);
  return app;

}
