exports.render = function(req, res){
    var redis = require('../../config/redis');
    redis.getMember(callback);
    function callback(mem){
      console.log(mem);
      res.send(mem);
    }
}
