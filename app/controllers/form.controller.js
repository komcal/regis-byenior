exports.render = function(req, res, next){
  var year = req.params.year;
  res.render('form',{
    'year': year
  });
}
