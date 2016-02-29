module.exports = function(app){
  var finish = require('../controllers/finish.controller');
  app.post('/finish',finish.render);
}
