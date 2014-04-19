var Queue = function () {
  this._storage = {};
  this._size = 0;
  this._pointer = 0;
};


Queue.prototype.enqueue = function(value){
  this._storage[this._size] = value;
  this._size++;
};

Queue.prototype.dequeue = function(){
  if (this._size-this._pointer) {
    var result = this._storage[this._pointer];
    delete this._storage[this._pointer];
    this._pointer++;
    return result;
  }
};

Queue.prototype.size = function(){
  return this._size-this._pointer;
};

