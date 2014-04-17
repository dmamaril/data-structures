var makeQueue = function(){
  var instance = {};
  _.extend(instance, queueMethods);
  // Use an object with numeric keys to store values
  instance._storage = {};
  instance._size = 0;
  instance._pointer = 0;
  // Implement the methods below

  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this._storage[this._size] = value;
  this._size++;
};

queueMethods.dequeue = function(){
  if (this._size-this._pointer) {
    var result = this._storage[this._pointer];
    delete this._storage[this._pointer];
    this._pointer++;
    return result;
  }
};

queueMethods.size = function(){
  return this._size-this._pointer;
};
