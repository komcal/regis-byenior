exports.render = function(req, res){
  res.render('succeed');
}
exports.renderPost = function(req, res){
  var id = req.body.std_id;
  var list = 'year'+(8-id[1]+1);
  var student = {
    id : req.body.std_id,
    list : 'year'+(8-id[1]+1),
  };
  var env = process.env.NODE_ENV || 'development';
  if(env === 'development'){
    res.render('succeed',{
      'std_id': student.id,
      'std_name': 'komkanit'
    });
  }
  else require('../../config/redis')(student,callback);

  function callback(data){
    console.log(data);
    if(data)
      res.render('succeed',{
        'std_id': data.id,
        'std_name': data.name
      });
    else
    res.render('succeed',{
      'std_id': "ERROR"
    });
  }
}
