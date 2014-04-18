var makeTree = function(value){
  var newTree = {};
  extend(newTree, treeMethods);
  newTree.value = value;
  newTree.children = null;
  return newTree;
};

// tree = {value: undefined, children: undefined}


var treeMethods = {};

treeMethods.addChild = function(value){
  if(!this.children) {
    this.children = [];
  }
  this.children.push(makeTree(value));

};

treeMethods.contains = function(target){
  if (this.value === target){
    return true;
  } else if (this.children === null){
    return false;
  } else {
    var kids = this.children;
    for (var i = 0 ; i < kids.length ; i++) {
      if (kids[i].contains(target)) {
        return true;
      }
    }
    return false;
  }

};






var extend = function(obj) {
  each(Array.prototype.slice.call(arguments, 1), function(source) {
    if (source) {
      for (var prop in source) {
        obj[prop] = source[prop];
      }
    }
  });
  return obj;
};

var each = function (collection, iterator) {
  if (Array.isArray(collection)) {
    for (var i = 0 ; i < collection.length; i++) {
      iterator(collection[i], i, collection);
    }
  } else {
    for (var key in collection) {
      iterator(collection[key], key, collection);
    }
  }
};
