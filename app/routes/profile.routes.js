module.exports = function(app){
  var profile = require('../controllers/profile.controller');
  app.post('/profile',profile.renderPost);
  app.get('/profile',profile.render);
}
