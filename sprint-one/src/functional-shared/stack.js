var makeStack = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  instance._storage = {};
  instance._size = 0; // Hint: set an initial value here

  // Implement the methods below

  };

  instance.size = stackMethods.size;

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
};
