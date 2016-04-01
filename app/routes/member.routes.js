module.exports = function(app){
    var member = require('../controllers/member.controller');
    app.get('/member', member.render);
}
