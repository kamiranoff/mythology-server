var express = require('express');
var path = require('path');
var app = express();
var people = require('./data/greeks.json');


function compare(a,b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}

people.sort(compare);

app.get('/api/people',function(req,res){
  res.send(people);
  //assuming your app.js and json file are at same level.
  //You may change this to 'lib/notes/foo.json' to fit you case
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
