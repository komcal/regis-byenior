exports.render = function(req, res){
  res.render('succeed');
}
exports.renderPost = function(req, res){
  var id = req.body.std_id;
  res.render('succeed',{
    'std_id': id
  });
}
