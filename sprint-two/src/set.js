var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this[item] = item;
};

setPrototype.contains = function(item){
  if (this[item]){
    return true;
  } else {
    return false;
  }
};

setPrototype.remove = function(item){
  delete this[item];
};
