var redis = require('redis');
var client = redis.createClient();
exports.findById = function(list,id,callback){
  client.lrange(list, 0, -1, function(err, students){
    if(err) console.log("ERROR");
    else{
      students = JSON.parse(students);
      var data = find(id,'id',students);
      client.quit();
      callback(data);
    }
  });
}
function find(data,field,items){
  for(var item of items){
    if(item[field] == data){
      return item;
    }
  }
}


return client;
