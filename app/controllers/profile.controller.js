exports.render = function(req, res){
  res.render('succeed');
}
exports.renderPost = function(req, res){
  var id = req.body.std_id;
  var list = 'year'+(8-id[1]+1);
  var env = process.env.NODE_ENV || 'development';
  if(env === 'development'){
    res.render('succeed',{
      'std_id': id,
      'std_name': 'komkanit'
    });
  }
  else{
    var redis = require('../../config/redis');
    redis.findById(list,id,callback);
  }
  function callback(data){
    console.log(data);
    if(data){
      var name = data.gender+" "+data.name+ "  "+data.lastname;
      res.render('succeed',{
        'std_id': data.id,
        'std_name': name
      });
    }
    else
    res.render('succeed',{
      'std_id': "ERROR"
    });
  }
}
