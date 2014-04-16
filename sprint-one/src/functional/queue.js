var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var pointer = 0;
  // Implement the methods below

  instance.enqueue = function(value){
    storage[size] = value;
    size++;
  };

  instance.dequeue = function(){
    if (size-pointer) {
      var result = storage[pointer];
      delete storage[pointer];
      pointer++;
      return result;
    }
  };

  instance.size = function(){
    return size-pointer;
  };

  return instance;
};
