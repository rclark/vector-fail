Running index.js shows that profiling this tm2z runs forever. Memory usage I see on OSX is ~800MB, and I've never had the patience to let the processe end.

The tm2z is configured to load vector data via `tilelive-bigtile`, which simply loads `fixtures/bigtile.vector.pbf` for every `getTile` request.
