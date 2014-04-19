var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);

};

HashTable.prototype.insert = function(k, v){

  // Gets Unique index from Hash Function based on limit
  var i = getIndexBelowMaxForKey(k, this._limit);

  // Check to see if there is already an array at index i - if not, add an empty array
  if (Array.isArray(this._storage[i]) === false){
    this._storage[i] = [];
  }

  // Push key value pair into the array at index i
  this._storage[i].push([k, v]);

  //Check if expansion is needed. Criteria is that at least 75% of the limit is used
  //  If so, call the rehash function
  var counted = this.counter();
  if (counted > this._limit * 0.75) {
    this.rehash(this._limit*2);
  }
};

HashTable.prototype.retrieve = function(k){

  // Gets Unique index from Hash Function based on limit

  var i = getIndexBelowMaxForKey(k, this._limit);

  // Go through the storage elemement at index i and look for the key that matched k and return the value;
  if (Array.isArray(this._storage[i])) {
    for (var y = 0; y<this._storage[i].length; y++){
      if (this._storage[i][y][0] === k){
        return this._storage[i][y][1];    // value is stored at index 1 -- [k,v]
      }
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){

  var i = getIndexBelowMaxForKey(k, this._limit);

  // If there is an element at index i
  if (this._storage[i]) {

    // If the array has a length of 1 at index i, set to empty array
    if (this._storage[i].length === 1) {
      this._storage[i] = [];

    // If the array has a length > than 1 (meaning more than 1 [k,v] pair)
    // Search the array for the one that matches k and delete it using splice
    } else if (this._storage[i].length > 1){
      for (var y = 0; y<this._storage[i].length; y++){
        if (this._storage[i][y][0] === k){
          this._storage[i].splice(y,1);
        }
      }
    }

  }

  // Check to see if compression is required. Criteria is that the elements take up less than 25% of current space
  var counted = this.counter();
  if (counted < this._limit*0.25){

  // Run rehash function to compress
    this.rehash(this._limit/2);
  }

};

HashTable.prototype.rehash = function(newLimit){

    // Create new HashTable with the new Limit (compression or expansion --- passed in by the insert/remove functions)
    var newHash = new HashTable;
    newHash._limit = newLimit;

    // Variable for loop
    var old = this._storage;

    // Go through all of the elements in the current HashTable object and reinsert into the new HashTable with new Limit
    for (var key in old) {
      if (Array.isArray(old[key])) {
        for (var i = 0 ; i < old[key].length ; i++) {
          newHash.insert(old[key][i][0], old[key][i][1]);
        }
      }
    }

    // Reassign the current limit to new Limit and reassign the current storage object to the new storage Object
    this._limit = newLimit;
    this._storage = newHash._storage;

};

HashTable.prototype.counter = function () {

  // Count the number of key value pairs in the storage element

  var count = 0;
  for (var key in this._storage) {
    if (Array.isArray(this._storage[key])) {
      count = count + this._storage[key].length;
    }
  }
  return count;
};
