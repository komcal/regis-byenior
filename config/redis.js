var redis = require('redis');
var client = redis.createClient();
exports.getMember = function(callback){
  var s = [];
  ['year1', 'year2', 'year3', 'year4'].forEach(function(year){
    client.lrange(year,0,-1, function(err, students){
      var l = 0;
      for(student of students){
        l++;
        student = JSON.parse(student);
        if(student['come'] === '1'){
          var k = {
            name: student['gender']+ student['name']+" "+student['lastname'],
            id: student['id'],
            study: student['study']
          }
          s.push(k);
        }
        if(year =='year4' && l == students.length)
          callback(s);
      }
    });
  });
}
exports.findById = function(list,id,callback){
  client.lrange(list, 0, -1, function(err, students){
    if(err) console.log("ERROR");
    else{
      var data = find(id,'id',students);
      callback(data);
    }
  });
}
exports.setDataById = function(list,id,field,newdata,callback){
  client.lrange(list, 0, -1, function(err, students){
    if(err) console.log("ERROR in confirm");
    else{
      var i=0;
      for(student of students){
        student = JSON.parse(student);
        if(student['id'] == id){
          student[field] = newdata;
          console.log(student);
          var data = JSON.stringify(student);
          client.LSET(list,i,data, function(err,reply){
            if(err)
              console.log(err)
            else {
              console.log(reply)
            }
          });
          break;
        }
        i++;
      }
      callback();
    }
  });
}
function find(data,field,items){
  for(var item of items){
    item = JSON.parse(item);
    if(item[field] == data){
      return item;
    }
  }
}


return client;
