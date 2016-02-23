var express  = require('express');
var app = express();
module.exports = function(){
  app.set('views','./app/views/');
  app.set('view engine', 'jade');
  app.use(express.static('./public'));

  require('../app/routes/index.routes')(app);

  return app;

}
