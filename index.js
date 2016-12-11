var express = require('express');
var path = require('path');
var app = express();

var GreekMyth = require('greek-mythology-data');

var gods = new GreekMyth.Greeks(GreekMyth.gods);
gods = gods.sortByName();
var allGreeks = new GreekMyth.Greeks(GreekMyth.all);
allGreeks = allGreeks.sortByName();

app.get('/api/people',function(req,res){
  res.send(allGreeks);
  //assuming your app.js and json file are at same level.
  //You may change this to 'lib/notes/foo.json' to fit you case
});

app.get('/api/gods',function(req,res){
  res.send(gods);
  //assuming your app.js and json file are at same level.
  //You may change this to 'lib/notes/foo.json' to fit you case
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
