var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){

    //Create a new node
    var node = makeNode(value);

    //if there are no nodes in the list, make the new node head
    if (!list.head) {
      list.head = node;
    }

    //if there is only 1 node in the list, set the next and previous values appropriately
    if (list.head === list.tail) {
      list.head.next = node;
      node.previous = list.head;
    }

    //if there are 2 or more nodes in the list, set the next and previous values appropriately
    if (list.tail) {
      list.tail.next = node;
      node.previous = list.tail;
    }

    //set tail to the new node created
    list.tail = node;
  };

  list.removeHead = function(){

    list.head = list.head.next;
    list.head.previous = null;
  };

  list.contains = function(target, node){
    //if a node is passed in as an argument, traverse starting at the passed in node
    if (node) {
      if (node.value === target) {
        return true;
      // if reached last node, return false
      } else if (node.next === null) {
        return false;
      // if there is a next, recurse
      } else {
        return list.contains(target, list.head.next);
      }

    //if node traverse starting at the head
    } else {
      return list.contains(target, list.head);
    }
  };

  list.addToHead = function(value){

    //Make new node
    var node = makeNode(value);

    //If there are no nodes, make this node tail
    if (!list.head) {
      list.tail = node;
    }

    //if there is only 1 node
    if (list.head === list.tail) {
      list.head.previous = node;
      node.next = list.head;
    }

    //if there are 2 or more nodes
    if (list.head) {
      list.head.previous = node;
      node.next = list.head;
    }

    //set the head to the new node
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
