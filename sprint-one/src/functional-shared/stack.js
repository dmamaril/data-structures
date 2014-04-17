var makeStack = function(){
  var instance = {};

  //_(instance).extend(stackMethods); // extends ALL instances with stackMETHODS
  _.extend(instance, stackMethods);
  instance._storage = {};
  instance._size = 0;

  return instance;
};

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
