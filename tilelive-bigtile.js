var path = require('path');
var fs = require('fs');

module.exports = Bigtile;

function Bigtile(uri, callback) {
  this.filepath = path.resolve(__dirname, 'fixtures', 'bigtile.vector.pbf');
  callback(null, this);
}

Bigtile.registerProtocols = function(tilelive) {
  tilelive.protocols['bigtile:'] = Bigtile;
};

Bigtile.prototype.getTile = function(z, x, y, callback) {
  fs.readFile(this.filepath, callback);
};

Bigtile.prototype.getInfo = function(callback) {
  callback(null, {
    "fake": "info"
  });
};
