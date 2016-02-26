module.exports = function(app){
  var form = require('../controllers/form.controller');
  app.get('/register/:year',form.render);
}
