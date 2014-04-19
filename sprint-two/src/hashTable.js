var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);

};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (Array.isArray(this._storage[i]) === false){
    this._storage[i] = [];
  }
  this._storage[i].push([k, v]);


  var counted = this.counter();
  // console.log(counted > this._limit * 0.75);
  // if (counted === 5){
  //   debugger;
  // }
  if (counted > this._limit * 0.75) {
    // this._limit *= 2;
    // this.rehash(1);
    this.rehash(this._limit*2);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // storage[i]
  console.log(this._storage[i]);
  if (Array.isArray(this._storage[i])) {
    for (var y = 0; y<this._storage[i].length; y++){
      if (this._storage[i][y][0] === k){
        return this._storage[i][y][1];
      }
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){

  var i = getIndexBelowMaxForKey(k, this._limit);

  // if (this._storage[i] === undefined){
  //   debugger;
  // }

  if (this._storage[i]) {
    if (this._storage[i].length === 1) {
      this._storage[i] = [];
    } else if (this._storage[i].length > 1){
      for (var y = 0; y<this._storage[i].length; y++){
        if (this._storage[i][y][0] === k){
          this._storage[i].splice(y,1);
        }
      }
    }

  }


  var counted = this.counter();
  if (counted < this._limit*0.25){
    this.rehash(this._limit/2);
  }

};

HashTable.prototype.rehash = function(newLimit){


    //create new HashTable with the new Limit
    //loop through current keys and add to new HashTable with inserts
    //reassign this HashTable to new HashTable

    var newHash = new HashTable;
    newHash._limit = newLimit;

    var old = this._storage;

    for (var key in old) {
      if (Array.isArray(old[key])) {
        for (var i = 0 ; i < old[key].length ; i++) {
          newHash.insert(old[key][i][0], old[key][i][1]);
        }
      }
    }
    // console.log(this);
    // console.log(newHash);
    this._limit = newLimit;
    this._storage = newHash._storage;
    // console.log(this);

    // newHash._storage[]




    // var limitInsert, limitRemove;

    // if (toggle){
    //   limitInsert = this._limit;
    //   limitRemove = this._limit/2;
    // } else {
    //   limitInsert = this._limit;
    //   limitRemove = this._limit*2;
    // }

    // // console.log(this._storage);

    // var k, v;


    // for (var key in this._storage){
    //   if(this._storage.hasOwnProperty(key)){
    //     if(this._storage[key].length >=1){
    //       for (var i =0; i<this._storage[key].length; i++){
    //           for (var j = 0; j<this._storage[key][i]; j++){
    //             console.log(this._storage[key][i].length);
    //             k = this._storage[key][i][j][0];
    //             v = this._storage[key][i][j][0];
    //             this.remove(k,limitRemove);
    //             this.insert(k,v, limitInsert);
    //           }
    //       }
    //     }
    //   }
    // }


};

HashTable.prototype.counter = function () {
  var count = 0;
  for (var key in this._storage) {
    if (Array.isArray(this._storage[key])) {
      count = count + this._storage[key].length;
    }
  }
  // console.log(count);
  return count;
};
