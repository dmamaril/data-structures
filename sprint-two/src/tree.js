var makeTree = function(value){
  var newTree = {};
  extend(newTree, treeMethods);
  newTree.value = value;
  newTree.children = null;
  newTree.parent = null;
  return newTree;
};



var treeMethods = {};

treeMethods.addChild = function(value){

  //if there are no children - create an empty array
  if(!this.children) {
    this.children = [];
  }

  //create a new tree node and update parent value
  var child = makeTree(value);
  child.parent = this;

  //move new tree node into the array
  this.children.push(child);

};

treeMethods.contains = function(target){

  // if current value matches target
  if (this.value === target){
    return true;

  // if there are no more children
  } else if (this.children === null){
    return false;

  // there are children so recurse and only return true if found
  } else {
    var kids = this.children;
    for (var i = 0 ; i < kids.length ; i++) {
      if (kids[i].contains(target)) {
        return true;
      }
    }

    //return false if all of the recursion did not find target
    return false;
  }

};

treeMethods.removeFromParent = function(){
  //go to parent node and access children array and remove the entry
  //delete this

  var parentArray = this.parent.children;
  for (var i = 0 ; i < parentArray.length ; i++) {
    if (parentArray[i].value === this.value) {
      parentArray.splice(i, 1);
    }
  }
  delete this;
};

treeMethods.traverse = function (iterator){

  //execute callback function on current node value
  iterator(this.value);

  //if the node has children, then run traverse on each child
  if(this.children !== null){
    each(this.children, function (element) {
      element.traverse(iterator);
    });
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
