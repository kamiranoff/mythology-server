var express = require('express');
var path = require('path');
var app = express();

var GreekMyth = require('greek-mythology-data');

var gods = new GreekMyth.Greeks(GreekMyth.gods);
gods = gods.sortByName();
var allGreeks = new GreekMyth.Greeks(GreekMyth.all);
allGreeks = allGreeks.sortByName();

function filteredGreeks(search) {
  var filteredGreeks = [];

  filteredGreeks = allGreeks.filter(function(el) {
    var name = el.name.toUpperCase().trim();
    var searchTerm = search.toUpperCase().trim();
    return  (name.indexOf(searchTerm) !== -1);
  });
  return filteredGreeks;
}

app.get('/api/people', function(req, res) {
  if (req.query.search) {
    res.send(filteredGreeks(req.query.search))
  } else {
    res.send(allGreeks);
  }
});

app.get('/api/gods', function(req, res) {
  res.send(gods);
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
});
