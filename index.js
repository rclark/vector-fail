var tilelive = require('tilelive');
var Bigtile = require('./tilelive-bigtile');
var Vector = require('tilelive-vector');
var path = require('path');

Bigtile.registerProtocols(tilelive);
Vector.registerProtocols(tilelive);

tilelive.load('tm2z://' + path.resolve(__dirname, 'fixtures', 'bigtile.tm2z'), function(err, source) {
  if (err) throw err;
  source.profile(function(err, result) {
    console.log(err || result);
  });
});
