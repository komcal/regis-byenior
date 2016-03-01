exports.render = function(req, res){
  var id = req.body.name;
  var list = 'year'+(8-id[1]+1);
  var redis = require('../../config/redis');
  redis.setDataById(list,id,'come','1', function(){
    res.render('finish');
  });

}
