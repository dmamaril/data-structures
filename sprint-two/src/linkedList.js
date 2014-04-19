var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = makeNode(value);
  if (!list.head) {
      list.head = node;
    }

    if (list.head === list.tail) {
      list.head.next = node;
      node.previous = list.head;
    }

    if (list.tail) {
      list.tail.next = node;
      node.previous = list.tail
    }

    list.tail = node;
  };

  list.removeHead = function(){
    list.head = list.head.next;
    list.head.previous = null;
  };

  list.contains = function(target, node){
   if (node) {
     if (node.value === target) {
       return true;
     } else if (node.next === null) {
       return false;
     } else {
       return list.contains(target, list.head.next);
     }
   } else {
     return list.contains(target, list.head);
   }
  };

  list.addToHead = function(value){
 var node = makeNode(value);
  if (!list.head) {
      list.tail = node;
    }

    if (list.head === list.tail) {
      list.head.previous = node;
      node.next = list.head;
    }

    if (list.head) {
      list.head.previous = node;
      node.next = list.head;
    }

    list.head = node;
  };

  list.removeTail = function(){
    list.tail = list.tail.previous;
    list.tail.next = null;
  };
  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  node.previous = null;
  return node;
};
