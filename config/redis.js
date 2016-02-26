
module.exports = function(student,callback){
  var redis = require('redis');
  var client = redis.createClient();
  client.lrange(student.list, 0, -1, function(err, students){
  if(err) console.log("ERROR");
  else{
    students = JSON.parse(students);
    var d = student.id;
    var data = find(d,'id',students);
    callback(data);
  }
});
client.quit();
}

function find(data,field,items){
  for(var item of items){
    if(item[field] == data){
      return item;
    }
  }
}
