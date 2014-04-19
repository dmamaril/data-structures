var makeStack = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  instance._storage = {};
  instance._size = 0; // Hint: set an initial value here

  // Implement the methods below

  };

  instance.size = stackMethods.size;
  //_(instance).extend(stackMethods); // extends ALL instances with stackMETHODS
  _.extend(instance, stackMethods);
  instance._storage = {};
  instance._size = 0;

  return instance;
};


var stackMethods = {
instance.push = function(value){
    storage[size] = value;
    size++;
  };

  instance.pop = function(){
    if (size) {
      size--;
      var result = storage[size];
      delete storage[size];
      return result;
    }
var stackMethods = {};

stackMethods.push = function(value){
  this._storage[this._size] = value;
  this._size++;
};

stackMethods.pop = function(){
  if (this._size) {
    this._size--;
    var result = this._storage[this._size];
    delete this._storage[this._size];
    return result;
  }
};

stackMethods.size = function(){
  return this._size;
};
