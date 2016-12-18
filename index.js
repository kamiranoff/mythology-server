var express = require('express');
var path = require('path');
var app = express();

import GreekMyth, {
  allCollection,
  demigodsCollection,
  godsCollection,
  generalDeitiesCollection,
  giantsCollection,
  kingsCollection,
  nymphsCollection,
  primordialDeitiesCollection,
  seaDeitiesCollection,
  titansCollection,

} from 'greek-mythology-data';

const olympians = new GreekMyth(godsCollection);
const sortedOlympians = olympians.sortBy('name');

function filteredGreeks(search) {
  var filteredGreeks = [];
  filteredGreeks = sortedOlympians.filter(function(el) {
    var name = el.name.toUpperCase().trim();
    var searchTerm = search.toUpperCase().trim();
    return (name.indexOf(searchTerm) !== -1);
  });
  return filteredGreeks;
}

app.get('/api/people', function(req, res) {
  if (req.query.search) {
    res.send(filteredGreeks(req.query.search))
  } else {
    res.send(sortedOlympians);
  }
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
});
