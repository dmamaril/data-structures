var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._counter = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._counter++;
  this._storage[i] = v;
  if (this._counter === this._limit-1) {
    this._limit *= 2;
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage[i];
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage[i] = null;
  this._counter--;
  if (this._counter <= this._limit/2 && this._limit > 8){
    this._limit /= 2;
  }

};

